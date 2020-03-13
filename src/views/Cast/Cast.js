import React, { Component } from 'react';
import Notification from '../../components/Notification';
import Spiner from '../../components/Spiner';
import movieApi from '../../services/movieApi';

class Cast extends Component {
  state = {
    movieCast: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    return this.fetchMovieCast(movieId);
  }

  fetchMovieCast = movieId => {
    this.setState({ loading: true });
    movieApi
      .fetchMovieCastById(movieId)
      .then(movie => movie.cast)
      .then(movieCast => this.setState({ movieCast }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { error, loading } = this.state;
    // console.log(this.state.movieCast);
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spiner />}

        <div>
          {this.state.movieCast && (
            <ul>
              {this.state.movieCast.map(
                ({ id, name, character, profile_path }) => (
                  <li key={id}>
                    <img
                      width="200"
                      src={`http://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={name}
                    />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default Cast;
