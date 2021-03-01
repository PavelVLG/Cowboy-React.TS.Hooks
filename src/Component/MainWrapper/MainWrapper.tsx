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
    introductory: "",
    taskDescription: "",
    task: {},
    infoElement: [""],
    locationCells: {},
  });
  const [userAnswer, setUserAnswer] = useState<any>("");
  const [compliteLevel, setComplitLevel] = useState<boolean>(true);
  const [level, setlevel] = useState<number>(1);
  const [checkFetch, setCheckFetch] = useState<boolean>(false);

  useEffect(() => {
    setCheckFetch(true);
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
          setCheckFetch(false);
          setMyJson(data.step[level]);
        }
      });
  }, [level]);

  const View = () => {
    let view;
    if (!checkFetch) {
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
  const changeLevel = (e: any) => {
    let event = e.target.id;
    if (event === "up" && level !== 3) {
      setlevel(level + 1);
    }
    if (event === "down" && level !== 1) {
      setlevel(level - 1);
    }
  };

  const ifLevelFalse = (): void => {
    console.log("LevelFalse");
  };
  const testing = () => {
    if (!userAnswer) {
      setComplitLevel(false);
    } else {
      checkUserInput(userAnswer);
    }
  };
  const checkUserInput = (item: string) => {
    let check = item.slice();
    check.includes(":") ? forJsxFormat(item) : ifLevelFalse();
  };
  const forJsxFormat = (a: string) => {
    console.log("for Jsx");
  };

  return (
    <div className="mainWrapper">
      <View />
      <div className="mainFlex">
        <div className="blockBg">
          <TitleHeader titleText={myJson.introductory} />
          <SubTitle
            subTitleText={myJson.taskDescription}
            infoElement={myJson.infoElement}
          />
          <LevelChange changeLevel={changeLevel} level={level} />
          <Output getEvent={setUserAnswer} />
          <StartButton checkUser={testing} />
          <PopUp />
        </div>
        <div className="displayWrapper">
          <Display cowboy={myJson.task} priston={myJson.locationCells} />
        </div>
      </div>
    </div>
  );
};
