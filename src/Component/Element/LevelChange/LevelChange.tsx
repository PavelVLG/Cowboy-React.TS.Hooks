import React from "react";
import "./LevelChange.css";

interface PropsFunc {
  levelUp: () => void;
  levelDown: () => void;
  level: number;
}

export const LevelChange: React.FC<PropsFunc> = ({ levelDown,levelUp, level }) => {
  return (
    <div className="textButton-conteiner">
      <div className="textFlex">
        <div className="buttonText">
          <p>Уровень {level} </p>
        </div>
        <div className="battonItem">
          <div>
            <button
              className="button-1"
              type="button"
              id="down"
              onClick={levelDown}
            >
              назад
            </button>
          </div>
          <div>
            <button
              className="button-2"
              type="button"
              id="up"
              onClick={levelUp}
            >
              вперед
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
