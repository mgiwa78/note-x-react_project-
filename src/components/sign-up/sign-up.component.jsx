import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../firebase/firebase.utils";
import { ButtonComponent } from "../Button/button.styles";

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
    console.log(value);
    setFormFields({ ...formfields, [name]: value });
  };

  const handleSubmit = async () => {
    if (!email === password) return;
    const userAuth = await createAuthUserWithEmailAndPassword(email, password);
    console.log(userAuth);

    await createUserDocFromAuth(userAuth, full_name);
  };

  return (
    <div className="sign-up-container">
      <p className="sign-up-title">
        Don &apos;t Have an account? <br /> Sign Up now
      </p>
      <div type="form" className="sign-up-form">
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
      </div>

      <ButtonComponent onClick={handleSubmit} authBtn>
        {" "}
        Sign Up
      </ButtonComponent>
    </div>
  );
};

export default SignUp;
