/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./MainWrapper.css";
import { LevelChange } from "../Element/LevelChange/LevelChange";
import { Output } from "../Element/Output/Output";
import { PopUp } from "../Element/PopUp/PopUp";
import { StartButton } from "../Element/StartButton/StartButton";
import { SubTitle } from "../Element/SubTitle/SubTitle";
import { TitleHeader } from "../Element/TitleHeader/TitleHeader";
import { Display } from "../Element/Display/Display";

export const MainWrapper = () => {


  fetch("http://localhost:3000/DataLevel.json")
    .then((respons) => {
      return respons.json();
    })
    .then((data) => {
      console.log(data.level[1]);
    });

  return (
    <div className="mainWrapper">
      <div className="mainFlex">
        <div>
          <TitleHeader />
          <SubTitle />
          <LevelChange />
          <Output />
          <StartButton />
          <PopUp />
        </div>
        <div>
          <Display />
        </div>
      </div>
    </div>
  );
};
