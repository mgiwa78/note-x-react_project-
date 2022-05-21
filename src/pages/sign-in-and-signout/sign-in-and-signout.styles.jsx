import styled from "styled-components";

export const SigninSignupPage = styled.div`
  display: flex;
  justify-content: center;
`;

export const SigninSignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px 40px;
  height: inherit;
  background-color: white;
  width: 300px;

  margin-top: 50px;
  align-items: center;

  /* UI Properties */
  background: transparent;
  background: linear-gradient(112deg, #ffffff 0%, #ffffff00 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 19px;
  opacity: 1;
  backdrop-filter: blur(1rem);
  @media only screen and (min-width: 728px) {
    height: 346px;
    width: 680px;
    justify-content: space-around;
  }
  @media only screen and (min-width: 1100px) {
    height: 60vh;
    width: 70%;
    justify-content: center;
  }
`;
