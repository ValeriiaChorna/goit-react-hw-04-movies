import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const myAPIkey = '4bab37c99947cd268443c52a9188d286';

const fetchDayTrending = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${myAPIkey}`)
    .then(res => res.data)
    .then(data => data.results);
};

const fetchMovieById = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${myAPIkey}`)
    .then(res => res.data);
};

const fetchMovieCastById = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${myAPIkey}`)
    .then(res => res.data);
};

const fetchMovieReviewsById = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${myAPIkey}&page=1`)
    .then(res => res.data)
    .then(data => data.results);
};

const fetchMovieByName = movieName => {
  return axios
    .get(
      `${BASE_URL}/search/movie?query=${movieName}&api_key=${myAPIkey}&page=1`,
    )
    .then(res => res.data)
    .then(data => data.results);
};

export default {
  BASE_URL,
  fetchDayTrending,
  fetchMovieById,
  fetchMovieCastById,
  fetchMovieReviewsById,
  fetchMovieByName,
};
