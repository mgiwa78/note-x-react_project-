import HeroText from "../home-hero-text/home-hero-text.component";

import { ReactComponent as HeroImg } from "../../svg/heroImg.svg";

import "./home.styles.scss";

import PageDesignLayer from "../page-design-layer/page-design-layer";
import PageBlur from "../page-blur/blur.component";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <PageDesignLayer />
      <PageBlur />
      <div className="home">
        <div className="hero-section">
          <HeroText />
          <HeroImg className="hero-image" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
