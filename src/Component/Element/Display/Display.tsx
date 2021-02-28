import React from "react";
import "./Display.css";
interface PropsStyle {
  cowboy: React.CSSProperties;
  priston: React.CSSProperties;
}
export const Display: React.FC<PropsStyle> = ({ cowboy, priston }) => {
  return (
    <div className="displayСonteiner" style={cowboy}>
      <div className="displayItem-cowboy"></div>
      <div className="displayItem" style={priston}>
        <div className="displayItem-Prison"></div>
      </div>
    </div>
  );
};
