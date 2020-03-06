import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWeHelp from './HomeWeHelp';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';


const Home = () => {
return(
  <div className="home__container">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSteps />
      <HomeAboutUs />
      <HomeWeHelp />
      <HomeContact />
      <HomeFooter />
  </div>
)
};

export default Home;


