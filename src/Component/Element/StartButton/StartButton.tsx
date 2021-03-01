import React from "react";
import "./StartButton.css";
interface Props {
  checkUser: () => void;
}
export const StartButton: React.FC<Props> = ({ checkUser }) => {
  return (
    <div className="start">
      <div className="startConteiner">
        <button className="startButton" type="button" onClick={checkUser}>
          Старт
        </button>
      </div>
    </div>
  );
};
