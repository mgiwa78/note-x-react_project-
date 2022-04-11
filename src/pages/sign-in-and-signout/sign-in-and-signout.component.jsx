import NavigationBar from "../../components/navigation-bar/navigation-bar.component";

import "./sign-in-and-signout.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SigninSignupDesignLayer from "../../components/signin-signup-design/signin-signup-design.component";
import PageBlur from "../../components/page-blur/blur.component";
import SignUp from "../../components/sign-out/sign-up.component";

const SignInAndSignUp = () => {
  return (
    <>
      <PageBlur />
      <SigninSignupDesignLayer />
      <div className="signin-signup-page">
        <div className="signin-signup-container">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default SignInAndSignUp;
