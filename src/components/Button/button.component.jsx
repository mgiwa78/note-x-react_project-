import "./button.styles.scss";

const Button = ({ auth, btnOnclick, children }) => {
  const onClickHandler = () => btnOnclick();
  return auth ? (
    <div className="auth-btn">{children}</div>
  ) : (
    <div className="nav-btn-text" onClick={onClickHandler}>
      {children}
    </div>
  );
};

export default Button;
