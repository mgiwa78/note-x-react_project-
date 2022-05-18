import "./form-input.styles.jsx";
import { FormInputContainer } from "./form-input.styles.jsx";
const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <FormInputContainer
      value={value}
      name={name}
      placeholder={placeholder}
      type={`${type}`}
      onChange={onChange}
    />
  );
};

export default FormInput;
