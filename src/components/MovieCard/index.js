import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, genres } = movie;
  return (
    <div className={'movie'}>
      <div className={'movie-poster'}>
        <img src={poster_path} alt="Poster" />
      </div>
      <div className={'movie-detail-col-1'}>
        <p>{title}</p>
        <p>{release_date}</p>
      </div>
      <div className={'movie-detail-col-2'}>
        <p>{genres ? genres.join(',') : 'No Genres'}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
