import React from "react";
import "./Display.css";

export const Display: React.FC = () => {
  return (
    <div className="displayСonteiner">
      <div className="displayItem-cowboy"></div>
      <div className="displayItem" style={{ justifyContent: "center" }}>
        <div className="displayItem-Prison"></div>
      </div>
    </div>
  );
};
