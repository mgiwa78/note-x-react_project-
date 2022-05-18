import styled from "styled-components";

export const NoteContainer = styled.div`
  width: 100%;
  color: #000b90;
  height: auto;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const NoteHead = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;
export const NoteTitle = styled.p`
  margin: 5px 0;
  font-size: 15px;
`;
export const NoteDate = styled.span`
  font-size: 14px;
  opacity: 0.5;
  font-weight: 500;
`;

export const NoteBody = styled.div`
  margin: 5px 0;
  font-size: 13px;
`;

export const NotePriority = styled.div`
  margin: 5px 0;
  font-size: 14px;
  opacity: 0.5;
  font-weight: 500;
`;

export const NoteFooter = styled.div`
  margin: 5px 0;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
