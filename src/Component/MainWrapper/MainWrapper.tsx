import React from "react";
import "./MainWrapper.css";
import { LevelChange } from "../Element/LevelChange/LevelChange";
import { Output } from "../Element/Output/Output";
import { PopUp } from "../Element/PopUp/PopUp";
import { StartButton } from "../Element/StartButton/StartButton";
import { SubTitle } from "../Element/SubTitle/SubTitle";
import { TitleHeader } from "../Element/TitleHeader/TitleHeader";
import { Display } from "../Element/Display/Display";
export const MainWrapper = () => {
  return (
    <div className="mainWrapper">
      <div className="mainFlex">
        <div>
          <LevelChange />
          <Output />
          <PopUp />
          <StartButton />
          <SubTitle />
          <TitleHeader />
        </div>
        <div>
          <Display />
        </div>
      </div>
    </div>
  );
};
