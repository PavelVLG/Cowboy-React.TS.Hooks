import React from "react";
import { IData } from "../Interfaces/Interfaces";
import "./StartButton.css";

type DataProps = {
  myJson: IData;
};

export const StartButton: React.FC<DataProps> = () => {
  return (
    <div className="start">
      <div className="startConteiner">
        <button
          className="startButton"
          type="button"
          onClick={() => console.log()}
        >
          Старт
        </button>
      </div>
    </div>
  );
};
