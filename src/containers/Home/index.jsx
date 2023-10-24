import { getMovieDetails, getMovies } from '../../api/movies';
import './styles.scss';
import MovieList from 'Components/MovieList';
import moviesData from 'Data/movies';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const initHome = async () => {
    const movies = await getMovies();
    console.log(movies.data.results);
    console.log(await getMovieDetails(movies.data.results[1].id));
    setMovieList(movies.data.results);
  };

  useEffect(() => {
    initHome();
  }, []);

  return (
    <div className="home">
      <MovieList movies={movieList} />
    </div>
  );
};

export default Home;
