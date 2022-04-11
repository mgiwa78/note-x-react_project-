import HeroText from "../home-hero-text/home-hero-text.component";
import NavigationBar from "../navigation-bar/navigation-bar.component";

import { ReactComponent as HeroImg } from "../../svg/heroImg.svg";

import "./home.styles.scss";

import PageDesignLayer from "../page-design-layer/page-design-layer";
import OvalDesign from "../design-elements/oval-design/oval-design.component";
import PageBlur from "../page-blur/blur.component";

const Home = () => {
  return (
    <>
      <PageDesignLayer />
      <PageBlur />
      <div className="home">
        <div className="hero-section">
          <HeroText />
          <HeroImg className="hero-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
