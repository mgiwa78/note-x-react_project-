import OvalDesign from "../design-elements/oval-design/oval-design.component";

const UserHomeDsignLayer = () => {
  const position1 = {
    top: "-28%",
    left: "-20%",
    width: 500,
    height: 500,
  };
  const position2 = {
    top: "80%",
    left: "40%",
    width: 420,
    height: 418,
  };
  const position3 = {
    top: "-10%",
    left: "70%",
    width: 741,
    height: 534,
  };

  return (
    <div className="page-design-layer">
      <OvalDesign
        position={position1}
        color1="#ff5d13"
        color2="#4C24FF"
        className="oval-element"
      />

      <OvalDesign
        position={position2}
        color1="#7E36DC"
        color2="#FF0A0AB3"
        className="oval-element"
      />
      <OvalDesign
        position={position3}
        color1="#ff0000df"
        color2="#8682ff"
        className="oval-element"
      />
    </div>
  );
};

export default UserHomeDsignLayer;
