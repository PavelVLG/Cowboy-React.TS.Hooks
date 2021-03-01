import React from "react";
import "./StartButton.css";

export const StartButton: React.FC = () => {
  return (
    <div className="start">
      <div className="startConteiner">
        <button
          className="startButton"
          type="button"
          onClick={() => console.log("start button")}
        >
          Старт
        </button>
      </div>
    </div> 
  );
};
