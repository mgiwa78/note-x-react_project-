import styled from "styled-components";

export const EditNoteFormInput = styled.div`
  color: #000b90;
  height: 100px;
  padding-top: 10px;
  margin-top: 15px;
  padding-right: 10px;
  @media screen and (min-width: 1300px) {
    height: 150px;
    margin-top: 15px;
  }
`;

export const EditTopInput = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: flex-start;
`;

export const EditNoteInput = styled.input`
  border: none;
  border-radius: 0px;
  background-color: transparent;
`;

export const EditTitleInput = styled(EditNoteInput)`
  font-size: 20px;
  padding: 0 10px;
  width: 90px;
  color: #000b90;

  &::placeholder {
    font-weight: 300;
    color: #000c9076;
  }
  @media screen and (min-width: 1300px) {
    font-size: 30px;
  }
`;

export const EditContentInput = styled(EditNoteInput)`
  padding: 5px 10px;
  font-size: 12px;
  width: 100%;
  color: #000c90a7;

  &::placeholder {
    color: #000c9076;
  }
  @media screen and (min-width: 1300px) {
    font-size: 14px;
  }
`;

export const EditPriority = styled.select`
  width: 68px;
  background-color: transparent;
  border: none;
  padding: 0 0 0 0;
  margin: 0;
  color: #000c90b0;

  font-family: inherit;
  font-size: 12px;
  cursor: inherit;
  line-height: inherit;

  @media screen and (min-width: 1300px) {
    font-size: 15px;
    width: 83px;
  }
`;
