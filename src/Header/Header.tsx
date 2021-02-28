/*ToDo:
1 Если аудио засунуть в функцию, при каждом вызове она пересоздается и play теряет ссылку?(забиндить?).
2 В классе вызываю функцию. Засунуть значение в useState?
*/
import React, { useState, useEffect } from "react";
import "./Header.css";
import Music from "../Source/Audo/ugly.mp3";
const audioPlay: HTMLAudioElement = new Audio(Music); 
export const Header: React.FC = () => {
  const [volume, setVolume] = useState<boolean>(false);
  useEffect(() => {
    if (volume) {
      audioPlay.play();
    } else {
      audioPlay.pause();
    }
  }, [volume]);

  const sound = () => {
    let sound: string = "mute";
    if (!volume) {
      sound = "volume";
    }
    return sound;
  };

  const test = (): any => {
    setVolume((): any => {
      setVolume(!volume);
    }); 
  };
  return (
    <nav className="header">
      <div className="headerLogo">
        <p>PavelVLG4</p>
      </div>
      <label className="lable" htmlFor="">
        <input className="checkbox" type="checkbox"></input>
        <span className={sound()} onClick={test}></span>
      </label>
    </nav>
  );
};
