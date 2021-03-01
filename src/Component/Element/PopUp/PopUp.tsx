import React, { useState, useEffect } from "react";
import "./PopUp.css";
interface Props {
  setDisplay: boolean;
  setProps: any;
}
export const PopUp: React.FC<Props> = ({ setDisplay, setProps }) => {
  const [popUp, setPopUp] = useState<string>("modal");
  useEffect(() => {
    if (!setDisplay) {
      setPopUp(() => {
        return "modal active";
      });
    } else {
      setPopUp(() => {
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
