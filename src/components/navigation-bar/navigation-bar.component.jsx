import { ReactComponent as Logo } from "../../svg/logo.svg";
import Button from "../Button/button.component";
import "./navigation-bar.styles.scss";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signUserOut } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { setDefaultStates } from "../../redux/notes/notes-actions";

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
    <div className="navigation-bar">
      <Logo onClick={() => Navigate("/")} />
      {user ? (
        <Button btnOnclick={signOutUser}>Sign Out</Button>
      ) : (
        <Button btnOnclick={signIn}>Sign In</Button>
      )}
    </div>
  );
};

export default NavigationBar;
