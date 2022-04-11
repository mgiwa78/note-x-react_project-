import Button from "../Button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <p className="sign-up-title">
        {" "}
        Have an account? <br /> Sign In now
      </p>
      <FormInput type="text" name="full_name" placeholder="Full Name" />
      <br />
      <FormInput type="email" name="email" placeholder="Email:" />
      <br />
      <FormInput type="password" name="password" placeholder="Password:" />
      <br />
      <FormInput
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password:"
      />
      <Button auth> Sign Up</Button>
    </div>
  );
};

export default SignUp;
