import styled from "styled-components";

export const NoteFormInput = styled.div`
  padding: 20px;
  background: linear-gradient(101deg, rgb(255, 0, 0) 0%, rgb(47, 0, 255) 100%)
    0% 0% no-repeat padding-box;
  margin-top: 20px;
  height: 200px;
  border-radius: 10px;
`;
export const TopInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NoteInput = styled.input`
  border: none;
  border-radius: 0px;
  background-color: transparent;
`;

export const TitleInput = styled(NoteInput)`
  font-size: 30px;
  padding: 0 10px;
  width: 350px;
  color: white;

  &::placeholder {
    font-weight: 300;
    color: white;
  }
`;

export const ContentInput = styled(NoteInput)`
  padding: 5px 10px;
  font-size: 15px;
  width: 100%;
  color: rgba(255, 255, 255, 0.892);

  &::placeholder {
    color: rgba(255, 255, 255, 0.892);
  }
`;

export const Priority = styled.select`
  width: 100px;
  background-color: transparent;
  border: none;
  padding: 0 0 0 0;
  margin: 0;
  color: rgba(255, 255, 255, 1);
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
`;
