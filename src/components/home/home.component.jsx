import HeroText from "../home-hero-text/home-hero-text.component";

// import { ReactComponent as HeroImg } from "../../svg/heroImg.svg";

import "./home.styles.jsx";

import PageDesignLayer from "../page-design-layer/page-design-layer";
import PageBlur from "../page-blur/blur.component";
import React from "react";
import { HeroSection } from "./home.styles";
import { HeroSvg } from "./home.styles.jsx";

const Home = () => {
  return (
    <React.Fragment>
      <PageDesignLayer />
      <PageBlur />
      <HeroSection>
        <HeroSvg />
        <HeroText />
      </HeroSection>
    </React.Fragment>
  );
};

export default Home;
