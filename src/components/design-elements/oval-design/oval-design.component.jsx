import "./oval-design.styles.scss";

const OvalDesign = ({ color1, color2, position }) => {
  return (
    <div
      style={{
        ...position,
        background: `linear-gradient(238deg, ${color1} 0%, ${color2} 100%) 0%    0% no-repeat padding-box`,
      }}
      className="oval-design"
    ></div>
  );
};

export default OvalDesign;
