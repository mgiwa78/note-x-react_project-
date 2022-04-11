import "./form-input.styles.scss";
const FormInput = ({ type, name, placeholder }) => {
  return (
    <input
      className="form-input-container"
      name={name}
      placeholder={placeholder}
      type={`${type}`}
    />
  );
};

export default FormInput;
