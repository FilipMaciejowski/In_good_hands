import React from "react";

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWeHelp from "./HomeWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div className="home__container">
      <HomeHeader />
      <Element name="start">
        <HomeThreeColumns />
      </Element>
      <Element name="idea">
        <HomeFourSteps />
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
      <HomeFooter />
    </div>
  );
};

export default Home;
