import { ReactComponent as Logo } from "../../svg/logo.svg";
import Button from "../Button/button.component";
import "./navigation-bar.styles.scss";
import { useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.action";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener } from "../../firebase/firebase.utils";
import { useState } from "react";
import { signUserOut } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";

const NavigationBar = () => {
  const user = useSelector(selectCurrentUser);

  const signOutUser = () => {
    Navigate("/");
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
