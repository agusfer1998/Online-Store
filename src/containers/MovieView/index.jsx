import { getMovieDetails } from '../../api/movies';
import './styles.scss';
import noMovie from 'Assets/noMovie.jpg';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieView = () => {
  const { id } = useParams();

  const [movieToDisplay, setMovieToDisplay] = useState(null);
  const [error, setError] = useState(false);

  const retriveMovieDetails = async () => {
    const selectedMovie = await getMovieDetails(id);

    if (!id || !selectedMovie) {
      setError(true);
    } else {
      setMovieToDisplay(selectedMovie.data);
    }
  };

  useEffect(() => {
    retriveMovieDetails();
  }, []);

  if (error) {
    return (
      <div className="movie-view movie-view--error">
        <h1>No movie found :(</h1>
        <img src={noMovie} alt="not found" />
      </div>
    );
  }

  const {
    overview,
    release_date: releaseDate,
    title,
    poster_path: posterPath,
    genres,
  } = movieToDisplay || {};

  return (
    <div className="movie-view">
      <div className="movie-view__image">
        <img src={posterPath} alt={title} />
      </div>
      <div className="movie-view__details">
        <h2 className="movie-view__title">{title}</h2>
        <p className="movie-view__release-year">
          {`Published in ${releaseDate}`}
        </p>
        <p className="movie-view__release-year">
          {genres.map(() => {})}
        </p>
        <p className="movie-view__description">{overview}</p>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieView;
