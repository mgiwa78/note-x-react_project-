import "./oval-design.styles.jsx";
import { OvalDesignStyle } from "./oval-design.styles.jsx";

const OvalDesign = ({ color1, color2, position }) => {
  return (
    <OvalDesignStyle
      style={{
        ...position,
        background: `linear-gradient(238deg, ${color1} 0%, ${color2} 100%) 0%    0% no-repeat padding-box`,
      }}
      className="oval-design"
    ></OvalDesignStyle>
  );
};

export default OvalDesign;
