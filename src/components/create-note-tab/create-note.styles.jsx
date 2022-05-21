import styled from "styled-components";

export const NoteFormInput = styled.div`
  padding: 10px;
  background: linear-gradient(101deg, rgb(255, 0, 0) 0%, rgb(47, 0, 255) 100%)
    0% 0% no-repeat padding-box;
  margin-top: 10px;
  height: 100px;
  border-radius: 5px;
  font-size: 16px;
  @media screen and (min-width: 1300px) {
    height: 150px;
    margin-top: 15px;
  }
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
  font-size: 20px;
  padding: 0 10px;
  width: 90px;
  color: white;
  @media screen and (min-width: 1300px) {
    font-size: 30px;
  }

  &::placeholder {
    font-weight: 300;
    color: white;
  }
`;

export const ContentInput = styled(NoteInput)`
  padding: 5px 10px;
  font-size: 12px;
  width: 100%;
  color: rgba(255, 255, 255, 0.892);
  @media screen and (min-width: 1300px) {
    font-size: 14px;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.892);
  }
`;

export const EditNoteTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Priority = styled.select`
  width: 68px;
  background-color: transparent;

  border: none;
  padding: 0 0 0 0;
  margin: 0;
  color: rgba(255, 255, 255, 1);
  font-family: inherit;
  font-size: 12px;
  cursor: inherit;
  line-height: inherit;
  @media screen and (min-width: 1300px) {
    font-size: 15px;
    width: 83px;
  }
`;
