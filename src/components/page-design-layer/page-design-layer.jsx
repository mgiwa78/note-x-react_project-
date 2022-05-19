import { PageDesignLayerStyles } from "./page-design-layer.styles";

const PageDesignLayer = () => {
  // const color1 = { color1: "#ff00b2", color2: "#0900ff99" };
  // const color2 = { color1: "#DC368CA8", color2: "#FF0A0AC9" };
  // const color3 = { color1: "#0800FF", color2: "#FF010173" };

  return (
    <PageDesignLayerStyles>
      <div className="Oval position1" />
      <div className="Oval position2" />
      <div className="Oval position3" />
    </PageDesignLayerStyles>
  );
};

export default PageDesignLayer;
