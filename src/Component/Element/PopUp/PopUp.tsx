import React, { useState, useEffect } from "react";
import "./PopUp.css";
import Horse from "../../../Source/Audo/horse.mp3";

interface Props {
  setDisplay: boolean;
  setProps: any;
}
export const PopUp: React.FC<Props> = ({ setDisplay, setProps }) => {
  const [popUp, setPopUp] = useState<string>("modal");
  const [audioHorse] = useState<HTMLAudioElement>(new Audio(Horse));
  useEffect(() => {
    if (!setDisplay) {
      setPopUp(() => {
        audioHorse.play();
        return "modal active";
      });
    } else {
      setPopUp(() => {
        audioHorse.pause();
        audioHorse.currentTime = 0;
        return "modal";
      });
    }
  }, [setDisplay]);
  return (
    <div className={popUp}>
      <div className="modalContent">
        <div className="modalText">
          <p>
            <span>Джо cбежал</span>
          </p>
          <div className="btnBlock">
            <button className="btnClose" onClick={() => setProps(true)}>
              Погнаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
