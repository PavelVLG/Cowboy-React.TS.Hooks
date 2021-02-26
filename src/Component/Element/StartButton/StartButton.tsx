import React from "react";
import "./StartButton.css";

interface DataText{
  onAdd(title: string):void
}


export const StartButton: React.FC <DataText>= (props) => {
  return (
    <div className="start">
      <div className="startConteiner">
        <button
          className="startButton"
          type="button"
          onClick={() => props.onAdd('половина пути')}
        >
          Старт
        </button>
      </div>
    </div>
  );
};
