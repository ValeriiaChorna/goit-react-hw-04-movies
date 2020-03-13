import React from 'react';
import T from 'prop-types';

const MovieDetails = ({ url, title, popularity, overview, genres }) => {
  return (
    <div>
      <img width="300" src={url} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>User score: {popularity}%</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <p>Genres</p>
        <p>{genres.reduce((acc, { name }) => acc + ' ' + name, '')}</p>
      </div>
    </div>
  );
};

// MovieDetails.

MovieDetails.propTypes = {
  url: T.string.isRequired,
  title: T.string.isRequired,
  popularity: T.number.isRequired,
  overview: T.string.isRequired,
  genres: T.array.isRequired,
};

export default MovieDetails;
