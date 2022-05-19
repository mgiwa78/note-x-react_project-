import styled from "styled-components";
import { ReactComponent as UserSvg } from "../../svg/user.svg";

export const NavigationBarComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  width: 15px;
  height: 15px;
`;
export const UserLeftContainer = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
