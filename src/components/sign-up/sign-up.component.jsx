import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.jsx";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../firebase/firebase.utils";
import { ButtonComponent } from "../Button/button.styles";
import { SignUpContainer, SignUpForm, SignUpTitle } from "./sign-up.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const eye = <FontAwesomeIcon icon={faEye} />;

  const defaultFormFields = {
    full_name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formfields, setFormFields] = useState(defaultFormFields);
  const { full_name, email, password, confirmPassword } = formfields;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };

  const handleSubmit = async () => {
    if (!(email && password && confirmPassword && full_name))
      return alert("Invalid inputs found");
    if (email === password)
      return alert("Email and password can't be the same");
    if (confirmPassword !== password) {
      return alert("Invalid password combination");
    }
    try {
      const userAuth = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(userAuth, full_name);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/network-request-failed).")
        return alert("No network connection, check your network and try again");
      else alert(error.message);
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmpasswordShown ? false : true);
  };

  return (
    <SignUpContainer>
      <SignUpTitle>
        Don&apos;t Have an account? <br /> Sign Up now
      </SignUpTitle>
      <SignUpForm>
        <FormInput
          value={full_name}
          type="text"
          name="full_name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <br />
        <FormInput
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <div className="passWrapper">
          <FormInput
            value={password}
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <i className="passwordToggle" onClick={togglePasswordVisiblity}>
            {eye}
          </i>
        </div>
        <div className="passWrapper">
          <FormInput
            type={confirmpasswordShown ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <i
            className="passwordToggle"
            onClick={toggleConfirmPasswordVisiblity}
          >
            {eye}
          </i>
        </div>
      </SignUpForm>

      <ButtonComponent onClick={handleSubmit} authBtn>
        {" "}
        Sign Up
      </ButtonComponent>
    </SignUpContainer>
  );
};

export default SignUp;
