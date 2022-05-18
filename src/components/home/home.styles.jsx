import styled from "styled-components";
import { ReactComponent as Svg } from "../../svg/heroImg.svg";

export const HeroSvg = styled.svg(Svg);
export const HeroSection = styled.div`
  display: flex;
  align-content: center;
  margin: 100px 50px;

  .home {
    z-index: 4;
  }
`;

export const HomeStyle = styled.div`
  z-index: 4;
`;
