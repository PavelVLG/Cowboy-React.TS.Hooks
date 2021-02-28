import React from "react";
import "./TitleHeader.css";

interface TitleText {
  titleText: string;
}
export const TitleHeader: React.FC<TitleText> = ({ titleText }) => {
  const TextTitle = (): JSX.Element => {
    return <p>{titleText}</p>;
  };

  return (
    <div className="headerText">
      <div className="headerTitle">
        <TextTitle />
      </div>
    </div>
  );
};
