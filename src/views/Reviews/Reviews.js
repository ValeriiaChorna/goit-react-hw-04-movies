import React, { Component } from 'react';
import Notification from '../../components/Notification';
import Spiner from '../../components/Spiner';
import movieApi from '../../services/movieApi';

class Reviews extends Component {
  state = {
    movieReviews: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    return this.fetchMovieReviews(movieId);
  }

  fetchMovieReviews = movieId => {
    this.setState({ loading: true });
    movieApi
      .fetchMovieReviewsById(movieId)
      .then(movieReviews => this.setState({ movieReviews }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { movieReviews, error, loading } = this.state;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spiner />}

        <div>
          {movieReviews && (
            <ul>
              {movieReviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h4>Author: {author}</h4>
                  <p>'{content}'</p>
                </li>
              ))}
            </ul>
          )}
          {movieReviews && movieReviews.length === 0 && (
            <p>We don't have any review for this moment</p>
          )}
        </div>
      </>
    );
  }
}

export default Reviews;
