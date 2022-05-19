import styled, { css } from "styled-components";

const getBtnType = (props) => {
  return props.authBtn
    ? css`
        height: 20px;
        font-size: 14px;
        width: 120px;
        background: transparent
          linear-gradient(105deg, #ed3107bf 0%, #4c24ff 100%) 0% 0% no-repeat
          padding-box;
        margin: 0;
        font-weight: 600;
        border-radius: 5px;
        @media only screen and (min-width: 768px) {
          height: 29px;
          font-size: 19px;
          width: 155px;
        }
        @media only screen and (min-width: 500px) {
          height: 25px;
          font-size: 17px;
          width: 105px;
        }
      `
    : props.createBtn
    ? css`
        font-size: 19px;
        margin: 0px;
        height: 35px;
        width: 130px;
        background-color: #4c24ff;
      `
    : props.deleteBtn
    ? css`
        height: 35px;
        width: 120px;
        font-size: 19px;

        background-color: #ed3107;
      `
    : props.navBtn
    ? css`
        font-size: 20px;
        color: #000b90;
        font-weight: 400;
        justify-content: center;
        @media only screen and (min-width: 425px) {
          font-size: 25px;
        }
      `
    : "";
};

export const ButtonComponent = styled.button`
  border-radius: 10px;
  justify-content: center;
  display: flex;
  color: #fff;

  align-items: center;
  background-color: transparent;
  border: 0px;

  ${(props) => getBtnType(props)}
`;
