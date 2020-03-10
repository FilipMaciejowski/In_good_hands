import React from 'react';

import Banner from '../HomeHeader/Banner';


const HomeHeader = () => {
  return (
    <div className="home__header-container">
      <div className="home__header-right-side">
        <Banner />
      </div>
      <div className="home__header-left-side">
        <img
          src={require('../../../assets/images/HOME-HERO-IMAGE.jpeg')}
          alt="unused items header"
        />
      </div>
    </div>
  );
};

export default HomeHeader;


