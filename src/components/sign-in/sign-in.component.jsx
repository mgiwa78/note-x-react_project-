import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUserInWithEmailAndPassword } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ButtonComponent } from "../Button/button.styles";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = () => {
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
    signUserInWithEmailAndPassword(email, password);
  };

  const displayUserHome = () => {
    if (user) {
      Navigate("/user");
    }
  };

  useEffect(() => displayUserHome(), [user]);
  return (
    <div className="sign-in-container">
      <p className="sign-in-title">
        {" "}
        Have an account? <br /> Sign In now
      </p>
      <div className="sign-in-form">
        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email:"
        />
        <br />
        <FormInput
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password:"
        />
      </div>
      <ButtonComponent onClick={handleSubmit} authBtn>
        {" "}
        Sign In
      </ButtonComponent>
    </div>
  );
};

export default SignIn;
