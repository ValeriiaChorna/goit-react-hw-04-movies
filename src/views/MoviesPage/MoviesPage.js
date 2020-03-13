import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import MovieList from '../../components/MovieList';
import Notification from '../../components/Notification';
import Spiner from '../../components/Spiner';
import getQueryParams from '../../utils/getQueryParams';
import movieApi from '../../services/movieApi';

class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovieByMovieName(query);
      // return;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMovieByMovieName(nextQuery);
    }
  }

  fetchMovieByMovieName = movieName => {
    this.setState({ loading: true });
    movieApi
      .fetchMovieByName(movieName)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleChangeQuery = query => {
    this.props.history.replace({
      ...this.props.location, //or   pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, error } = this.state;
    return (
      <>
        <p>Find a movie here:</p>
        <SearchBox onSubmit={this.handleChangeQuery} />

        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {loading && <Spiner />}

        {/* {movies.length === 0 && (
          <p>Sorry, we can't find any film with this name, try again</p>
        )} */}

        {movies && <MovieList movies={movies} location={this.props.location} />}
      </>
    );
  }
}

export default MoviesPage;
