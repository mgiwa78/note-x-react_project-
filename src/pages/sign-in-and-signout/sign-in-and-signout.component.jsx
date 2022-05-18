import "./sign-in-and-signout.styles.jsx";

import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SigninSignupDesignLayer from "../../components/signin-signup-design/signin-signup-design.component";
import PageBlur from "../../components/page-blur/blur.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {
  SigninSignupContainer,
  SigninSignupPage,
} from "./sign-in-and-signout.styles.jsx";

const SignInAndSignUp = () => {
  return (
    <React.Fragment>
      <PageBlur />
      <SigninSignupDesignLayer />
      <SigninSignupPage>
        <SigninSignupContainer>
          <SignIn />
          <SignUp />
        </SigninSignupContainer>
      </SigninSignupPage>
    </React.Fragment>
  );
};

export default SignInAndSignUp;
