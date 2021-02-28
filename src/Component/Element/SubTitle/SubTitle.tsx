import React from "react";
import "./SubTitle.css";
interface addData {
  subTitleText:string ;
  infoElement: string[];
}
export const SubTitle: React.FC<addData> = ({ subTitleText, infoElement }) => {
  const SubTitleHeader = (): JSX.Element => {
    return <p> {subTitleText}</p>;
  };
  const SubTitleText = (): JSX.Element => {
    return <li>{infoElement}</li>;
  };

  return (
    <div className="level">
      <div className="level__header">
        <SubTitleHeader />
      </div>
      <div className="level__ul">
        <ul>
          <SubTitleText />
        </ul>
      </div>
    </div>
  );
};
