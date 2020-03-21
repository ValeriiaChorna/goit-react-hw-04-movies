import React, { Component } from 'react';
import MovieDetails from '../../components/MovieDetails';
import { NavLink, Switch, Route } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import Notification from '../../components/Notification';
import Spiner from '../../components/Spiner';
import routes from '../../routes';
import movieApi from '../../services/movieApi';

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
    // history.goBack();
    if (state && state.from) {
      // console.log(state.from);
      return history.push(state.from);
    }
    history.push(routes.MOVIES);
  };

  render() {
    const { match } = this.props;
    const { error, loading } = this.state;

    // console.log(this.state.movieDetail);
    return (
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
            url={`http://image.tmdb.org/t/p/w500${this.state.movieDetail.backdrop_path}`}
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
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: this.props.location },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path={routes.CAST} component={Cast} />
          <Route path={routes.REVIEWS} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MoviesPage;
