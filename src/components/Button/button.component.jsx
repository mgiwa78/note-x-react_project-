import "./button.styles.scss";

const Button = ({ createBtn, deleteBtn, styled, btnOnclick, children }) => {
  const onClickHandler = () => btnOnclick();
  return styled ? (
    <div className="btn auth-btn">{children}</div>
  ) : createBtn ? (
    <div className="btn createBtn">{children}</div>
  ) : deleteBtn ? (
    <div className="btn deleteBtn">{children}</div>
  ) : (
    <div className="nav-btn-text" onClick={onClickHandler}>
      {children}
    </div>
  );
};

export default Button;
