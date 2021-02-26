import React from "react";
import { IData } from "../Interfaces/Interfaces";
import "./StartButton.css";

export const StartButton: React.FC<IData> = () => {
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
