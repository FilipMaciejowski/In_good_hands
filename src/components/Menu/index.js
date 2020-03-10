import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="home__header-right-side">
      <div className="right__side-bottom-nav">
        <Link to="start" spy={true} smooth={true} duration={500}>
          Start
        </Link>
        <Link to="idea" spy={true} smooth={true} duration={500}>
          Idea
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          About us
        </Link>
        <Link to="organizations" spy={true} smooth={true} duration={500}>
          Foundation and Organizations
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Menu;
