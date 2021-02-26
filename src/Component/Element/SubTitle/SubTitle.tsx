import React from "react";
import "./SubTitle.css";
interface addData {
  subTitleText: { taskDescription: string } | null;
  infoElement: string[] | null;
}
export const SubTitle: React.FC<addData> = ({ subTitleText, infoElement }) => {
  const SubTitleHeader = (): JSX.Element => {
    return <p> {subTitleText}</p>;
  };
  const SubTitleText:JSX.Element = infoElement!.map(
    (item: string, index: number): JSX.Element => {
      return <li key={index}>{item}</li>;
    }
  );
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
