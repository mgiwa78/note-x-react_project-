import styled from "styled-components";

export const SignInTitle = styled.p`
  font-size: 20px;

  font-weight: 700;
  color: #000b90;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const SignInForm = styled.div`
  .icon {
    width: 14px;
  }
  margin: 10px 0;
  .passwordToggle {
    position: absolute;
    top: 8%;
    right: 4%;
    color: #000c906a;
    :hover {
      color: #000b90;
      cursor: pointer;
    }
  }

  .passWrapper {
    position: relative;
    display: flex;
  }
`;
export const SignInContainer = styled.div`
  margin-bottom: 30px;
  @media only screen and (min-width: 551px) {
    margin-right: 30px;
  }
  @media only screen and (min-width: 1100px) {
    margin-right: 100px;
  }
`;
