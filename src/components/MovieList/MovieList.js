import React from 'react';
import { NavLink } from 'react-router-dom';
import routs from '../../routes';
import T from 'prop-types';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `${routs.MOVIE_DETAILS_PAGE}/${id}`,
              state: { from: location },
            }}
            className="link"
            activeClassName="active-link"
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: T.array.isRequired,
  location: T.object.isRequired,
};

export default MovieList;
