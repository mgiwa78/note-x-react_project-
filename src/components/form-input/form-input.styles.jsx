import styled from "styled-components";

export const FormInputContainer = styled.input`
  border: none;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  font-size: 12px;
  color: #000b90;

  &::placeholder {
    color: #000b90;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 26px;
    font-size: 17px;
  }
`;
