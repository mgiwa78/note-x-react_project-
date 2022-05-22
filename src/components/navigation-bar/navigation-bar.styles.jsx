import styled from "styled-components";
import { ReactComponent as UserSvg } from "../../svg/user.svg";

export const NavigationBarComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
  .logo {
    width: 120px;
    margin-bottom: -8px;
    padding: 0;

    @media only screen and (min-width: 768px) {
      width: 170px;
    }
  }
`;
export const UserLogo = styled(UserSvg)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const UserLeftContainer = styled.div`
  width: max-content;
  height: 30px;
  display: flex;
  align-items: flex-end;
  align-items: center;
  justify-content: space-between;
`;
