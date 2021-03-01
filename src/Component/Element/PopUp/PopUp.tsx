import React, { useState } from "react";
import "./PopUp.css";

export const PopUp: React.FC = () => {
  const [popUp, setPopUp] = useState<string>("modal");

  return (
    <div className={popUp}>
      <div className="modalContent">
        <div className="modalText">
          <p>
            <span>Джо cбежал</span>
          </p>
        </div>
      </div>
    </div>
  );
};
