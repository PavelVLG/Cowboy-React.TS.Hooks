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
          <button className="headerBtn" type="button">
            Включить атмосферу
          </button>
        </div>
      </div>
    </nav>
  );
};
