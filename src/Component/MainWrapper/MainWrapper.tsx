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

export const MainWrapper: React.FC = () => {
  const [level, setlevel] = useState(1);
  const [resorseApi, setResorseApi] = useState<number | object>();

  const jsonApi = async (id: number) => {
    const res = await fetch("http://localhost:3000/DataLevel.json");
    const resorse = await res.json();
    return resorse.level[id];
  };
  useEffect(() => {
    jsonApi(level).then((res) => {
      setResorseApi(res);
    });
  }, [level]);
  const changeLevel = () => {
    console.log("ok");
  };
  const userInpt = () => {
    console.log("userInpt");
  };

  return (
    <div className="mainWrapper">
      <div className="mainFlex">
        <div className="blockBg">
          <TitleHeader />
          <SubTitle />
          <LevelChange onChange={changeLevel} />
          <Output userInpt={userInpt} />
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
