import styled from "styled-components";
import { ReactComponent as Svg } from "../../svg/heroImg.svg";

// export const mainSvg = styled.svg(Svg);

export const HeroSvg = styled(Svg)`
  height: 200px;
  margin-top: 40px;
  @media only screen and (min-width: 425px) {
    height: 250px;
  }
  @media only screen and (min-width: 860px) {
    margin-right: 20px;
    height: 390px;
  }
  @media only screen and (min-width: 980px) {
    height: 430px;
  }
  @media only screen and (min-width: 1058px) {
    height: 380px;
  }
  @media only screen and (min-width: 1122px) {
    height: 400px;
  }
  @media only screen and (min-width: 1276px) {
    height: 500px;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    height: 500px;
  }
  @media only screen and (min-width: 1276px) {
    height: 500px;
    margin-top: 100px;
  }
  justify-content: center;
  /* border: 2px solid black; */
  margin: 15px 25px;
  height: 100vmax;
  max-height: 500px;
  padding: 0;

  .home {
    z-index: 4;
  }
  /* display: flex;
  align-content: center;
  margin: 100px 50px;

  .home {
    z-index: 4;
  } */
  @media only screen and (min-width: 860px) {
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`;
