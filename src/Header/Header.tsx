import React from "react";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <nav className="header">
      <div className="headerLogo">
        <p>PavelVLG4</p>
      </div>
      <label className="lable" htmlFor="">
        <input className="checkbox " type="checkbox" autoFocus></input>
        <span className="mute"></span>
      </label>
    </nav>
  );
};
