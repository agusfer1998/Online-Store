import instance from './config';

const getMovies = () => instance.get('discover/movie');

const getMovieDetails = (movieId) =>
  instance.get(`/movie/${movieId}`);

export { getMovies, getMovieDetails };
