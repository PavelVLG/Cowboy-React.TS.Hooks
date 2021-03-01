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
      setlevel(level + 1); // callback?
    }
    if (event === "down" && level !== 1) {
      setlevel(level - 1);
    }
  };

  const ifLevelFalse = (): void => {
    setComplitLevel(false);
  };
  const testing = () => {
    if (!userAnswer) {
      ifLevelFalse();
    } else {
      checkUserInput(userAnswer);
    }
  };
  const checkUserInput = (item: string) => {
    let check = item.slice();
    check.includes(":") ? forJsxFormat(item) : ifLevelFalse();
  };

  const forJsxFormat = (item: string) => {
    const separation: string[] = item //убираю лишнии пробелы и точки с запятой
      .replace(/\s/g, "")
      .split(";")
      .filter(function (elem: any) {
        return elem !== "";
      });

    const transform = separation.map(function (item) {
      return (
        item
          .split(":")[0]
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join("") +
        ":" +
        item.split(":")[1]
      );
    });

    const obj = transform.map((item: any): {} => {
      let newObj: any = {};
      newObj[item.split(":")[0]] = item.split(":")[1];
      setMyJson((task) => {
        return { ...myJson, task: newObj };
      });
      return newObj;
    });
    console.log(Object.keys(myJson));

    if (JSON.stringify(obj[0]) === JSON.stringify(myJson.locationCells)) {
      console.log("Поднять уровень");
    } else {
      setComplitLevel(false);
      console.log(compliteLevel);
    }
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
