import styled from "styled-components";

export const NoteContainer = styled.div`
  width: 100%;
  color: #000b90;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 1300px) {
    border-radius: 10px;
  }
`;

export const NoteHead = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;
export const NoteTitle = styled.p`
  margin: 0;
  font-size: 15px;
  @media screen and (min-width: 1300px) {
    font-size: 18px;
  }
`;
export const NoteDate = styled.span`
  font-size: 12px;
  opacity: 0.5;
  font-weight: 500;
  @media screen and (min-width: 1300px) {
    font-size: 13px;
  }
`;

export const NoteBody = styled.div`
  margin: 5px 0;
  font-size: 13px;
  @media screen and (min-width: 1300px) {
    font-size: 14px;
  }
`;

export const NotePriority = styled.div`
  margin: 0;
  font-size: 13px;
  opacity: 0.5;
  font-weight: 500;
`;

export const NoteFooter = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
