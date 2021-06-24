import React from 'react';
import cover1 from '../../assets/bg1.jpg';
import cover2 from '../../assets/bg2.jpg';
import Search from '../Search';
import './Header.css';

const Header = () => {
  const headerStyle = {
    backgroundImage: (Math.floor(Math.random() * 10) + 1) % 2 === 0 ? `url(${cover1})` : `url(${cover2})`,
    height: `250px`,
  };
  return (
    <div className={'header'} style={headerStyle}>
      <p className={'header-title'}>
        netflix
        <span className={'header-title-span'}>roulette</span>
      </p>
      <Search />
    </div>
  );
};

export default Header;
