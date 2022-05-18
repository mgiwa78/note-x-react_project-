import styled, { css } from "styled-components";

const getBtnType = (props) => {
  console.log(props);
  return props.authBtn
    ? css`
        height: 40px;
        font-size: 24px;
        width: 220px;
        background: transparent
          linear-gradient(105deg, #ed3107bf 0%, #4c24ff 100%) 0% 0% no-repeat
          padding-box;
        margin: 0;
        font-weight: 600;
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
        font-size: 27px;
        color: #000b90;
        font-weight: 400;
        justify-content: baseline;
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
