import "./sign-in-and-signout.styles.scss";

import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SigninSignupDesignLayer from "../../components/signin-signup-design/signin-signup-design.component";
import PageBlur from "../../components/page-blur/blur.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => {
  return (
    <React.Fragment>
      <PageBlur />
      <SigninSignupDesignLayer />
      <div className="signin-signup-page">
        <div className="signin-signup-container">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignInAndSignUp;
