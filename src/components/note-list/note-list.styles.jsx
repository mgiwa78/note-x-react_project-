import styled from "styled-components";

export const NotesContainer = styled.div`
  //background-color: rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 19, 19, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(2rem);
  padding: 30px 30px;
  width: 45%;
  max-width: 430px;
  height: 590px;
`;
export const NotesListContainer = styled.div`
  margin-top: 10px;
  overflow-y: scroll;
  height: 430px;
  scroll-behavior: smooth;
`;
