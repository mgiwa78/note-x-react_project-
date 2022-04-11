import { ReactComponent as Logo } from "../../svg/logo.svg";
import Button from "../Button/button.component";
import "./navigation-bar.styles.scss";
import { useNavigate } from "react-router";

const NavigationBar = () => {
  const Navigate = useNavigate();
  const btnOnclick = () => Navigate("/auth");
  return (
    <div className="navigation-bar">
      <Logo onClick={() => Navigate("/")} />
      <Button btnOnclick={btnOnclick}>Sign in</Button>
    </div>
  );
};

export default NavigationBar;
