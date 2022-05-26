import styled from "styled-components";
import { ReactComponent as Svg } from "../../svg/heroImg.svg";

// export const mainSvg = styled.svg(Svg);

export const HeroSvg = styled(Svg)`
  height: 240px;
  margin-top: 40px;
  @media only screen and (min-width: 425px) {
    height: 260px;
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
  align-items: center;
  padding-bottom: 80px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 90%;

  @media only screen and (min-width: 1200px) {
    height: 550px;
    margin-top: 30px;
    overflow: hidden;
  }
  @media only screen and (min-width: 1276px) {
    height: 570px;
  }
  @media only screen and (min-width: 1260px) {
    padding-bottom: 20px;
  }

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
