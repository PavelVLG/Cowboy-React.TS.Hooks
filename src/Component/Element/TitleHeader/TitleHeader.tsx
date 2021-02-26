import React from 'react';
import "./TitleHeader.css";

interface TitleText {
  titleText: {introductory: string}
}
export const TitleHeader: React.FC<TitleText> = ({ titleText }) => {
  if (!titleText) {
    console.log("Не ок");
  } else {
    console.log(titleText);
  }
  console.log();
  return (
    <div className="headerText">
      <div className="headerTitle">
        <p>
          Введение Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          blanditiis cumque repellendus, officia voluptatibus omnis.
        </p>
      </div>
    </div>
  );
};
