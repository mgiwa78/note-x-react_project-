import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 15px;
  margin-left: 0;
  color: white;
  background: transparent linear-gradient(96deg, #ed3107 0%, #4c24ff 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 5px;
  padding: 0 20px;
`;

export const PaginationBtns = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`;
export const ArrowText = styled.span`
  font-size: 15px;
`;
export const PaginationBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60px;

  .right-arrow {
    margin-left: 5px;
  }
  .left-arrow {
    margin-right: -5px;
  }
`;
