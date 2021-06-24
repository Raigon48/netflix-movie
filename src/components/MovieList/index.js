import React from 'react';
import { mockData } from '../../mockData/mock';
import MovieCard from '../MovieCard';
import './MovieList.css';

const MovieList = () => {
  const listMovies = mockData.data.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  return <div className={'movielist-container'}>{mockData && listMovies}</div>;
};

export default MovieList;
