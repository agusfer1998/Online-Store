import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button';
import './index.scss';

const Movie = ({ movie }) => (
  <div className="movie__container">
    <div className="movie__poster__box">
      <img
        className="movie__poster__img"
        src={movie.poster}
        alt={movie.alt}
      />
      <h2 className="movie__poster__title">{movie.title}</h2>
    </div>
    <div className="movie__poster__add">
      <Button value="+ Add"></Button>
    </div>
  </div>
);

Movie.propTypes = { movie: PropTypes.object };

export default Movie;
