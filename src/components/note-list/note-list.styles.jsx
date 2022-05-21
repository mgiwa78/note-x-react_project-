import styled from "styled-components";

export const NotesContainer = styled.div`
  //background-color: rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 19, 19, 0.2);
  border-radius: 5px;

  backdrop-filter: blur(2rem);
  padding: 20px 30px;
  width: 100%;
  max-width: 430px;
  height: max-content;
`;
export const NotesListContainer = styled.div`
  margin-top: 10px;
  overflow-y: scroll;
  height: 430px;
  scroll-behavior: smooth;
`;
