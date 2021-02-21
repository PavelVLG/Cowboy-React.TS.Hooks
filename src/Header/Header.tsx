import React from "react";
import "./Header.css";
export const Header: React.FC = () => {
  return (
    <nav className="header">
      <div className="headerLogo">
        <p>
          Pavel<span className="logoSpan">VLG</span>4
        </p>
      </div>
      <div className="logoSpan">
        <div className="headerItem">
         <input type="checkbox" autoFocus ></input>
        </div>
      </div>
    </nav>
  );
};
