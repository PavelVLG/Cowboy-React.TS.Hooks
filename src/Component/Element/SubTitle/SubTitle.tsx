import React from "react";
import "./SubTitle.css";
interface addData {
  subTitleText: { taskDescription: string } | null;
}
export const SubTitle: React.FC<addData> = ({ subTitleText }) => {
  const SubTitleText = (): JSX.Element => {
    return <p> {subTitleText}</p>;
  };
  return (
    <div className="level">
      <div className="level__header">
        <SubTitleText />
      </div>
      <div className="level__ul">
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            molestias distinctio ut facilis nulla quos, recusandae modi
            necessitatibus, minima vitae doloremque cumque iure!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            molestias distinctio ut facilis nulla quos, recusandae modi
            necessitatibus, minima vitae doloremque cumque iure!
          </li>
        </ul>
      </div>
    </div>
  );
};
