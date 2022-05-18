import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.jsx";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../firebase/firebase.utils";
import { ButtonComponent } from "../Button/button.styles";
import { SignUpContainer, SignUpForm, SignUpTitle } from "./sign-up.styles.jsx";

const SignUp = () => {
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
    if (!email === password) return;
    const userAuth = await createAuthUserWithEmailAndPassword(email, password);
    console.log(userAuth);

    await createUserDocFromAuth(userAuth, full_name);
  };

  return (
    <SignUpContainer>
      <SignUpTitle>
        Don &apos;t Have an account? <br /> Sign Up now
      </SignUpTitle>
      <SignUpForm>
        <FormInput
          value={full_name}
          type="text"
          name="full_name"
          placeholder="Full Name:"
          onChange={handleChange}
        />
        <br />
        <FormInput
          value={email}
          type="email"
          name="email"
          placeholder="Email:"
          onChange={handleChange}
        />
        <br />
        <FormInput
          value={password}
          type="password"
          name="password"
          placeholder="Password:"
          onChange={handleChange}
        />
        <br />
        <FormInput
          value={confirmPassword}
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password:"
          onChange={handleChange}
        />
      </SignUpForm>

      <ButtonComponent onClick={handleSubmit} authBtn>
        {" "}
        Sign Up
      </ButtonComponent>
    </SignUpContainer>
  );
};

export default SignUp;
