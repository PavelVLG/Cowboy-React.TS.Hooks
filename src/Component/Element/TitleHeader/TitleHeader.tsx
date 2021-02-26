import React from "react";
import "./TitleHeader.css";

interface TitleText {
  titleText: { introductory: string | null } | null;
}
export const TitleHeader: React.FC<TitleText> = ({ titleText }) => {
 console.log(titleText,"title" )
  return (
    <div className="headerText">
      <div className="headerTitle">
       df
      </div>
    </div>
  );
};
