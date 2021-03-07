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

  const ifLevelFalse = (): void => {
    setComplitLevel(false);
  };
  const levelUp = () => {
    if (level !== 3) {
      setlevel((level) => {
        return level + 1;
      });
    }
  };
  const levelDown = () => {
    if (level !== 1) {
      setlevel((level) => {
        return level - 1;
      });
    }
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

    if (JSON.stringify(obj[0]) === JSON.stringify(myJson.locationCells)) {
      timer(levelUp);
    } else {
      ifLevelFalse();
    }
  };
  const timer = (func: () => void): any => {
    const timerId = window.setTimeout(goBack, 2000);
    function goBack() {
      func();
      clearTimeout(timerId);
      console.log(timerId);
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
          <LevelChange level={level} levelDown={levelDown} levelUp={levelUp} />
          <Output getEvent={setUserAnswer} />
          <StartButton checkUser={testing} />
          <PopUp setDisplay={compliteLevel} setProps={setComplitLevel} />
        </div>
        <div className="displayWrapper">
          <Display cowboy={myJson.task} priston={myJson.locationCells} />
        </div>
      </div>
    </div>
  );
};
