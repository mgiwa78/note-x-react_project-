import styled from "styled-components";

export const Blur = styled.div`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  background: transparent;
  //   /* UI Properties */
  //   background: transparent linear-gradient(120deg, #000000eb 0%, #000000fa 100%)
  //     0% 0% no-repeat padding-box;
  //   opacity: 0.43;
  opacity: 0.7;
  backdrop-filter: blur(3rem);
  -webkit-backdrop-filter: blur(11px);
`;
