import React from 'react';
import { Link } from 'react-scroll';

const Banner = () =>{
  return (
    <div className="home__header-banner">
      <div className="home__header-banner-content">
        <h1>
          Let's help!
          <br />
          Give away unused items in good hands
        </h1>
        <div className="header__buttons">
          <Link>Donate<br/>items</Link>
          <Link>Organize<br/>donation</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
