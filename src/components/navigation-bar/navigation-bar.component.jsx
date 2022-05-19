import { ReactComponent as Logo } from "../../svg/logo.svg";

import "./navigation-bar.styles.jsx";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signUserOut } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { setDefaultStates } from "../../redux/notes/notes-actions";
import { ButtonComponent } from "../Button/button.styles";
import {
  NavigationBarComponent,
  UserLeftContainer,
  UserLogo,
} from "./navigation-bar.styles.jsx";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const signOutUser = () => {
    Navigate("/");
    dispatch(setDefaultStates());

    signUserOut();
  };
  const Navigate = useNavigate();

  const signIn = () => Navigate("/auth");

  return (
    <NavigationBarComponent>
      <Logo className="logo" onClick={() => Navigate("/")} />
      {user ? (
        <UserLeftContainer>
          <UserLogo onClick={() => Navigate("/user")} />
          <ButtonComponent navBtn onClick={signOutUser}>
            Sign Out
          </ButtonComponent>
        </UserLeftContainer>
      ) : (
        <ButtonComponent navBtn onClick={signIn}>
          Sign In
        </ButtonComponent>
      )}
    </NavigationBarComponent>
  );
};

export default NavigationBar;
