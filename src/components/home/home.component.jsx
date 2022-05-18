import HeroText from "../home-hero-text/home-hero-text.component";

import { ReactComponent as HeroImg } from "../../svg/heroImg.svg";

import "./home.styles.jsx";

import PageDesignLayer from "../page-design-layer/page-design-layer";
import PageBlur from "../page-blur/blur.component";
import React from "react";
import { HeroSection, HomeStyle } from "./home.styles";

const Home = () => {
  return (
    <React.Fragment>
      <PageDesignLayer />
      <PageBlur />
      <HomeStyle>
        <HeroSection>
          <HeroText />
          <HeroImg style={{ height: "600px", marginTop: "-90px" }} />
        </HeroSection>
      </HomeStyle>
    </React.Fragment>
  );
};

export default Home;
