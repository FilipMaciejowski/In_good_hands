import React from "react";
import { Element } from "react-scroll";

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWeHelp from "./HomeWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";


const Home = () => {
  return (
    <div className="home__container">
      <HomeHeader />
      <Element name="start">
        <HomeThreeColumns />
      </Element>
      <Element name="idea">
        <HomeSimpleSteps />
      </Element>
      <Element name="about">
        <HomeAboutUs />
      </Element>
      <Element name="organizations">
        <HomeWeHelp />
      </Element>
      <Element name="contact">
        <HomeContact />
      </Element>
    </div>
  );
};

export default Home;
