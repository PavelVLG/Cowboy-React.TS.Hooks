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
  const [myJson, setMyJson] = useState({
    introductory: null ,
    askDescription: null,
    task: null,
    infoElement: null,
    locationCells: null,
  });
  const [level, setlevel] = useState<number>(1);
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    setCheck(true);
    fetch("http://localhost:3000/DataLevel.json")
      .then((response) => {
        if (response.status !== 200) {
          console.log(`сатус ошибки № ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if ("step" in data) {
          setCheck(false);
          setMyJson(data.step[level]);
        }
      });
  }, [level]);

  const View = () => {
    let view;
    if (!check) {
      view = "vievOk";
    } else {
      view = "viewErr";
    }
    return (
      <div className={view}>
        <div className="viewContent">
          <p>Ожидание ответа от сервера</p>
        </div>
      </div>
    );
  };

  return (

    <div className="mainWrapper">
      <View />
      <div className="mainFlex">
        <div className="blockBg">
          <TitleHeader titleText={myJson.introductory} />
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
