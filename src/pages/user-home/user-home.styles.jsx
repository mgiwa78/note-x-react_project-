import styled from "styled-components";

export const UserHomeContainer = styled.div`
  align-items: center;
  padding-top: 40px;
  padding-bottom: 80px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 90%;
  .noteView {
  }
  @media screen and (min-width: 850px) {
    padding-top: 0;
    flex-direction: row;
    overflow-y: hidden;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px;
  }
`;
export const UserHomeBlur = styled.div`
  display: flex;
`;
