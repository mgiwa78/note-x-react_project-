import styled from "styled-components";
import { ReactComponent as Svg } from "../../svg/heroImg.svg";

export const HeroSvg = styled.svg(Svg);
export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 50px;
  .hero-image {
  }

  .home {
    z-index: 4;
  }
`;

export const HeroImg = styled(HeroSvg)`
  height: 500px;
`;

export const HomeStyle = styled.div`
  z-index: 4;
`;
