import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import T from 'prop-types';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(({ title, id }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${routes.MOVIES}/${id}`,
            state: { from: location },
          }}
          className="link"
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: T.arrayOf(T.shape({ id: T.number, title: T.string })).isRequired,
  location: T.object,
};

export default MovieList;
