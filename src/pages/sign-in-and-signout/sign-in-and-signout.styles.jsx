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

  padding: 40px 40px;
  height: inherit;
  background-color: white;
  width: 300px;
  margin-top: 50px;
  align-items: center;

  /*

   UI Properties 
   
  */
  background: transparent;
  background: linear-gradient(112deg, #ffffff 0%, #ffffff00 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 19px;
  opacity: 1;
  backdrop-filter: blur(1rem);
  @media only screen and (min-width: 728px) {
    height: 346px;
    width: 680px;
    padding-top: 50px;
    padding-bottom: 50px;

    justify-content: space-around;
  }
  @media only screen and (min-width: 1100px) {
    height: max-content;
    width: max-content;
    justify-content: flex-start;
    padding-right: 100px;
    padding-left: 100px;
    align-items: center;
  }
`;
