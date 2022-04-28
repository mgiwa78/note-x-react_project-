import "./form-input.styles.scss";
const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      className="form-input-container"
      name={name}
      placeholder={placeholder}
      type={`${type}`}
      onChange={onChange}
    />
  );
};

export default FormInput;
