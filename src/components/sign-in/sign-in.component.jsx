import Button from "../Button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <p className="sign-in-title">
        {" "}
        Have an account? <br /> Sign In now
      </p>
      <FormInput type="email" name="email" placeholder="Email:" />
      <br />
      <FormInput type="password" name="password" placeholder="Password:" />
      <Button auth> Sign In</Button>
    </div>
  );
};

export default SignIn;
