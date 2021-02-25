/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import "./MainWrapper.css";
import { LevelChange } from "../Element/LevelChange/LevelChange";
import { Output } from "../Element/Output/Output";
import { PopUp } from "../Element/PopUp/PopUp";
import { StartButton } from "../Element/StartButton/StartButton";
import { SubTitle } from "../Element/SubTitle/SubTitle";
import { TitleHeader } from "../Element/TitleHeader/TitleHeader";
import { Display } from "../Element/Display/Display";

interface DataJson {
  introductory: string;
  askDescription: string;
  task: { key: object; value: string };
  infoElement: [];
  locationCells: { key: object; value: string };
}

export const MainWrapper: React.FC = () => {
  const [level, setlevel] = useState<number>(1);
  const [resorseApi, setResorseApi] = useState<DataJson>();
  const [check, setCheck] = useState<boolean>(false);

  const jsonApi = async (id: number) => {
    const res = await fetch("http://localhost:3000/DataLevel.json");
    const resorse = await res.json();
    return resorse.Step[id];
  };

  const View = () => {
    if (!check) {
      console.log("check false");
    } else {
      console.log("check true");
    }
    return <></>;
  };

  return (
    <div className="mainWrapper">
      <View />
      <div className="mainFlex">
        <div className="blockBg">
          <TitleHeader />
          <SubTitle />
          <LevelChange />
          <Output />
          <StartButton />
          <PopUp />
        </div>
        <div className="displayWrapper">
          <Display />
        </div>
      </div>
    </div>
  );
};
