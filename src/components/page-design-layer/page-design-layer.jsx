import OvalDesign from "../design-elements/oval-design/oval-design.component";
import "./page-design-layer.scss";
const PageDesignLayer = () => {
  const position1 = {
    top: -30,
    left: -130,
    width: 500,
    height: 500,
  };
  const position2 = {
    top: -93,
    left: 944,
    width: 220,
    height: 218,
  };
  const position3 = {
    top: "40%",
    left: "80%",
    width: 441,
    height: 434,
  };
  return (
    <div className="page-design-layer">
      <OvalDesign
        position={position1}
        color1="#ff00b2"
        color2="#0900ff99"
        className="oval-element"
      />

      <OvalDesign
        position={position2}
        color1="#DC368CA8"
        color2="#FF0A0AC9"
        className="oval-element"
      />
      <OvalDesign
        position={position3}
        color1="#0800FF"
        color2="#FF010173"
        className="oval-element"
      />
    </div>
  );
};

export default PageDesignLayer;
