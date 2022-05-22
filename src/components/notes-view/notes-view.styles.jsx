import styled from "styled-components";

export const NotesViewContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(255, 19, 19, 0.2);
  border-radius: 5px;
  backdrop-filter: blur(2rem);
  padding: 25px;

  height: max-content;
  margin: 30px 0;
  max-width: 430px;

  padding-bottom: 30px;
  @media screen and (min-width: 850px) {
    margin: 0;
    max-width: 450px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 580px;
    border-radius: 10px;
  }
`;
