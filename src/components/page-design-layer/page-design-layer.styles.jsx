import styled from "styled-components";

export const PageDesignLayerStyles = styled.div`
  .Oval {
    transform: matrix(0.95, -0.33, 0.33, 0.95, 0, 0);
    opacity: 1;
    position: absolute;
    z-index: -2;
    border-radius: 50%;
    overflow: hidden;
  }
  .position1 {
    background: linear-gradient(238deg, #ff00b2 0%, #0900ff99 100%) 0% 0%
      no-repeat padding-box;
    top: -30px;
    left: -30px;
    width: 200px;
    height: 200px;
  }
  .position2 {
    background: linear-gradient(238deg, #dc368ca8 0%, #ff0a0ac9 100%) 0% 0%
      no-repeat padding-box;
    top: -123px;
    left: 284px;
    width: 220px;
    height: 218px;
  }
  .position3 {
    background: linear-gradient(238deg, #0800ff 0%, #ff010173 100%) 0% 0%
      no-repeat padding-box;
    top: 60%;
    left: 40%;
    width: 341px;
    height: 334px;
  }
  /* .position1 {
    background: linear-gradient(238deg, #ff00b2 0%, #0900ff99 100%) 0% 0%
      no-repeat padding-box;
    top: 30px;
    left: -130px;
    width: 500px;
    height: 500px;
  }
  .position2 {
    background: linear-gradient(238deg, #dc368ca8 0%, #ff0a0ac9 100%) 0% 0%
      no-repeat padding-box;
    top: -93px;
    left: 944px;
    width: 220px;
    height: 218px;
  }
  .position3 {
    background: linear-gradient(238deg, #0800ff 0%, #ff010173 100%) 0% 0%
      no-repeat padding-box;
    top: 40%;
    left: 60%;
    width: 541px;
    height: 534px;
  } */
  @media only screen and (min-width: 425px) {
    .position1 {
      top: -60px;
      left: -60px;
      width: 250px;
      height: 250px;
    }
    .position2 {
      top: -163px;
      left: 284px;
      width: 280px;
      height: 268px;
    }
    .position3 {
      top: 50%;
      left: 40%;
      width: 391px;
      height: 384px;
    }
  }
  @media only screen and (min-width: 532px) {
    .position2 {
      top: -163px;
      left: 554px;
      width: 380px;
      height: 368px;
    }
  }
  @media only screen and (min-width: 800px) {
    .position1 {
      top: -60px;
      left: -60px;
      width: 350px;
      height: 350px;
    }
    .position2 {
      top: -163px;
      left: 684px;
      width: 350px;
      height: 368px;
    }
    .position3 {
      top: 40%;
      left: 40%;
      width: 591px;
      height: 684px;
    }
  }
  @media only screen and (min-width: 919px) {
    .position1 {
      top: -60px;
      left: -60px;
      width: 350px;
      height: 350px;
    }
    .position2 {
      top: -223px;
      left: 694px;
      width: 480px;
      height: 468px;
    }
    .position3 {
      top: 40%;
      left: 40%;
      width: 591px;
      height: 684px;
    }
  }
  @media only screen and (min-width: 1148px) {
    .position1 {
      top: -60px;
      left: -60px;
      width: 350px;
      height: 350px;
    }
    .position2 {
      top: -223px;
      left: 894px;
      width: 480px;
      height: 468px;
    }
    .position3 {
      top: 50%;
      left: 40%;
      width: 791px;
      height: 784px;
    }
  }
  @media only screen and (min-width: 1276px) {
    .position1 {
      top: -60px;
      left: -60px;
      width: 350px;
      height: 350px;
    }
    .position2 {
      top: -223px;
      left: 894px;
      width: 480px;
      height: 468px;
    }
    .position3 {
      top: 50%;
      left: 60%;
      width: 791px;
      height: 784px;
    }
  }
`;
