import React, { Component, lazy, Suspense } from 'react';
import MovieDetails from '../../components/MovieDetails';
import { Link, Switch, Route } from 'react-router-dom';
// import Cast from '../Cast';
// import Reviews from '../Reviews';
import Notification from '../../components/Notification';
import Spiner from '../../components/Spiner';
import routes from '../../routes';
import movieApi from '../../services/movieApi';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

class MoviesPage extends Component {
  state = {
    movieDetail: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    return this.fetchMovieByMovieId(movieId);
  }

  fetchMovieByMovieId = movieId => {
    this.setState({ loading: true });
    movieApi
      .fetchMovieById(movieId)
      .then(movieDetail => this.setState({ movieDetail }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  onBackButton = () => {
    const {
      history,
      location: { state },
    } = this.props;
    if (state && state.from) {
      return history.push(state.from);
    }
    history.push(routes.HOMEPAGE);
  };

  render() {
    const { match } = this.props;
    const { error, loading } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <>
          <button onClick={this.onBackButton} type="button">
            Go back
          </button>

          {error && (
            <Notification
              message={`Whoops, something went wrong: ${error.message}`}
            />
          )}

          {loading && <Spiner />}

          {this.state.movieDetail && (
            <MovieDetails
              url={`${movieApi.IMG_URL}${this.state.movieDetail.backdrop_path}`}
              title={this.state.movieDetail.title}
              popularity={this.state.movieDetail.popularity}
              overview={this.state.movieDetail.overview}
              genres={this.state.movieDetail.genres}
            />
          )}

          <hr />

          <p>Addition Information</p>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: this.props.location.state.from },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { from: this.props.location.state.from },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route path={routes.CAST} component={Cast} />
            <Route path={routes.REVIEWS} component={Reviews} />
          </Switch>
        </>
      </Suspense>
    );
  }
}

export default MoviesPage;
