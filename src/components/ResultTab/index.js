import React from 'react';
import Button from '../Button';

import './ResultTab.css';

const ResultTab = () => {
  return (
    <div className={'result-tab-wrapper'}>
      <div className={'result-tab'}>
        <div className={'left-side'}>
          <p>7 Movies Found</p>
        </div>
        <div className={'sorting'}>
          <p>SORT BY </p>
          <Button title={'RELEASE DATE'} />
          <Button title={'RATING'} />
        </div>
      </div>
    </div>
  );
};

export default ResultTab;
