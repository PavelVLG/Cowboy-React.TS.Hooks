import React, { useState, useEffect } from "react";
import "./Header.css";

export const Header: React.FC = () => {
  const [volume, setVolume] = useState<boolean>(true);

  const sound = () => {
    let sound: string = "mute";
    if (volume) {
      sound = "volume";
    }
    return sound;
  };

  return (
    <nav className="header">
      <div className="headerLogo">
        <p>PavelVLG4</p>
      </div>
      <label className="lable" htmlFor="">
        <input className="checkbox" type="checkbox"></input>
        <span className={sound()}></span>
      </label>
    </nav>
  );
};
