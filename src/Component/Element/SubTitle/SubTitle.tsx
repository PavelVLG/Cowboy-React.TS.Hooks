import { type } from "os";
import React from "react";
import "./SubTitle.css";
interface addData {
  subTitleText: string;
  infoElement: object[];
}
export const SubTitle: React.FC<addData> = ({ subTitleText, infoElement }) => {
  const SubTitleHeader = (): JSX.Element => {
    return <p> {subTitleText}</p>;
  };
  console.log(infoElement[0]);
  const SubTitleText = (): JSX.Element => {
    return <li className="levelLi">{infoElement}</li>;
  };

  return (
    <div className="level">
      <div className="levelHeader">
        <SubTitleHeader />
      </div>
      <div className="levelUl">
        <ul>
          <SubTitleText />
        </ul>
      </div>
    </div>
  );
};
