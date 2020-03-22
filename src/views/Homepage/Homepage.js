import React, { Component } from 'react';
import MovieList from '../../components/MovieList';
import Notification from '../../components/Notification';
import Spiner from '../../components/Spiner';
import movieApi from '../../services/movieApi';

class Homepage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    this.setState({ loading: true });
    movieApi
      .fetchDayTrending()
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading, error } = this.state;

    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {loading && <Spiner />}

        {movies.length > 0 && (
          <>
            <h2>Trending today</h2>
            <MovieList movies={movies} />
            {/* <MovieList movies={movies} location={this.props.location} /> */}
          </>
        )}
      </>
    );
  }
}

export default Homepage;
