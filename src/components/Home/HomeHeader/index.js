import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
const HomeHeader = () => {
  

  return (
    <div className="home__header-container">
      <div className="home__header-right-side">
        <div className="right__side-top-nav">
          <NavLink to="/registration/login">Log inn</NavLink>
          <NavLink to="/registration/signup">Sign up</NavLink>
        </div>
        <div className="right__side-bottom-nav">
          <Link>Start</Link>
          <Link>Idea</Link>
          <Link>About us</Link>
          <Link>Foundation and Organizations</Link>
          <Link>Contact</Link>
        </div>
       {/*  <NavLink to="/registration/login">Donate items</NavLink>
        <NavLink to="/registration/signup">Organize help</NavLink> */}
      </div>
      <div className="home__header-left-side">
        <img
          src={require("../../../assets/images/Home-Hero-Image.jpg")}
          alt="unused items header"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
