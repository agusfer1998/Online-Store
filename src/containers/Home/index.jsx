import React from 'react';
import YearFilter from '../../components/YearFilter';
import Button from '../../components/Button';
import './index.scss';
import TopBar from '../../components/TopBar';
import Movie from '../../components/Movie';

const Home = () => (
  <div className="home">
    <TopBar
      routes={[
        { label: 'button1', route: 'nothing' },
        { label: 'button2', route: 'nothingMuch' },
      ]}></TopBar>

    <Movie
      movie={{
        alt: 'It by Stephen King',
        poster:
          'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88992/93703/It-Chapter-Two-Advance-Style-Poster-buy-original-movie-posters-at-starstills__08896.1572628118.jpg?c=2',
        title: 'IT',
      }}></Movie>

    <Button type="secondary">MyButton</Button>
    <YearFilter listOfYears={[2010, 2011, 2012]}></YearFilter>
  </div>
);

export default Home;
