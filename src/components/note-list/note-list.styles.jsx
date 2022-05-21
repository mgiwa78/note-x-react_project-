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
  @media screen and (min-width: 850px) {
    width: 40%;
    margin-right: 20px;
  }
  @media screen and (min-width: 1300px) {
    margin-right: 40px;
    border-radius: 10px;
  }
`;
export const NotesListContainer = styled.div`
  margin-top: 10px;
  overflow-y: scroll;
  height: 430px;
  scroll-behavior: smooth;

  @media screen and (min-width: 850px) {
    height: 50vh;
  }
  @media screen and (min-width: 1300px) {
    height: 60vh;
  }
`;
