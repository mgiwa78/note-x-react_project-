import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUserInWithEmailAndPassword } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ButtonComponent } from "../Button/button.styles";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.jsx";
import { SignInContainer, SignInForm, SignInTitle } from "./sign-in.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const eye = <FontAwesomeIcon className="icon" icon={faEye} />;

  const user = useSelector(selectCurrentUser);
  const Navigate = useNavigate();
  const defaultForm = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    if (!(email && password)) return alert("Invalid inputs found");
    signUserInWithEmailAndPassword(email, password);
  };

  const displayUserHome = () => {
    if (user) {
      Navigate("/user");
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => displayUserHome(), [user]);
  return (
    <SignInContainer>
      <SignInTitle>
        {" "}
        Have an account? <br /> Sign In now
      </SignInTitle>
      <SignInForm>
        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <br />{" "}
        <div className="passWrapper">
          <FormInput
            key="passwordInput"
            type={passwordShown ? "text" : "password"}
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />

          <i className="passwordToggle" onClick={togglePasswordVisiblity}>
            {eye}
          </i>
        </div>
      </SignInForm>
      <ButtonComponent onClick={handleSubmit} authBtn>
        {" "}
        Sign In
      </ButtonComponent>
    </SignInContainer>
  );
};

export default SignIn;
