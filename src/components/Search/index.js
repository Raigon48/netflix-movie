import React from 'react';
import Button from '../Button';

import './Search.css';

const Search = () => {
  return (
    <div className={'search-container-wrapper'}>
      <div className={'search-container'}>
        <p className="find-movie">FIND YOUR MOVIE</p>
        <form className="form-box">
          <input type="text" />
          <Button title={'SEARCH'} />
        </form>
        <div className={'btn-group'}>
          <p>SEARCH BY</p>
          <Button title={'TITLE'} />
          <Button title={'GENERE'} />
        </div>
      </div>
    </div>
  );
};

export default Search;
