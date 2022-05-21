import styled, { css } from "styled-components";

const getBtnType = (props) => {
  return props.newNote
    ? css`
        height: 26px;
        font-size: 16px;
        width: 150px;
        border-radius: 5px;

        background: transparent
          linear-gradient(105deg, #ed3107bf 0%, #4c24ff 100%) 0% 0% no-repeat
          padding-box;
        margin: 0;
        font-weight: 600;

        @media screen and (min-width: 1300px) {
          font-size: 20px;
          height: 34px;
          width: 190px;
          border-radius: 5px;
        }
      `
    : props.authBtn
    ? css`
        height: 26px;
        font-size: 16px;
        width: 150px;
        border-radius: 5px;

        background: transparent
          linear-gradient(105deg, #ed3107bf 0%, #4c24ff 100%) 0% 0% no-repeat
          padding-box;
        margin: 0;
        font-weight: 600;
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
        font-size: 13px;
        margin: 0px;
        height: 25px;
        width: 70px;
        background-color: #4c24ff;
        margin-right: 20px;
        @media only screen and (min-width: 1300px) {
          height: 30px;
          font-size: 17px;
          width: 105px;
        }
      `
    : props.deleteBtn
    ? css`
        font-size: 13px;
        margin: 0px;
        height: 25px;
        width: 70px;

        background-color: #ed3107;
        @media only screen and (min-width: 1300px) {
          height: 30px;
          font-size: 17px;
          width: 105px;
        }
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
  border-radius: 4px;
  justify-content: center;
  display: flex;
  color: #fff;

  align-items: center;
  background-color: transparent;
  border: 0px;

  ${(props) => getBtnType(props)}
`;
