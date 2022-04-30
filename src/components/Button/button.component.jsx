import "./button.styles.scss";

const Button = (props) => {
  const { createBtn, deleteBtn, styled, btnOnclick, children } = props;

  return styled ? (
    <div onClick={btnOnclick} className="btn auth-btn">
      {children}
    </div>
  ) : createBtn ? (
    <div onClick={btnOnclick} className="btn createBtn">
      {children}
    </div>
  ) : deleteBtn ? (
    <div onClick={btnOnclick} className="btn deleteBtn">
      {children}
    </div>
  ) : (
    <div className="nav-btn-text" onClick={btnOnclick}>
      {children}
    </div>
  );
};

export default Button;
