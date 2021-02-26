import React from "react";
import "./TitleHeader.css";

interface TitleText {
  titleText: { introductory: string };
}
export const TitleHeader: React.FC<TitleText> = ({ titleText }) => {
  const TitleText = (): JSX.Element => {
    if(titleText){
      return <p>{titleText.introductory}</p>
    }else{
      return<></>
    }
  };
  return (
    <div className="headerText">
      <div className="headerTitle">
        <TitleText />
      </div>
    </div>
  );
};
