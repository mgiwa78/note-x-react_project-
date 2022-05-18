import styled from "styled-components";

export const EditNoteFormInput = styled.div`
  padding: 20px;
  color: #000b90;

  margin-top: 15px;
  height: 160px;
`;

export const EditTopInput = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: space-between;
`;

export const EditNoteInput = styled.input`
  border: none;
  border-radius: 0px;
  background-color: transparent;
`;

export const EditTitleInput = styled(EditNoteInput)`
  font-size: 30px;
  padding: 0 10px;
  width: 350px;
  color: #000b90;

  &::placeholder {
    font-weight: 300;
    color: #000c9076;
  }
`;

export const EditContentInput = styled(EditNoteInput)`
  padding: 5px 10px;
  font-size: 15px;
  width: 100%;
  color: #000c90a7;

  &::placeholder {
    color: #000c9076;
  }
`;

export const EditPriority = styled.select`
  width: 100px;
  background-color: transparent;
  border: none;
  padding: 0 0 0 0;
  margin: 0;
  color: #000c9076;

  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
`;
