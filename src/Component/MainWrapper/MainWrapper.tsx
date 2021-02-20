import React from 'react';
import './MainWrapper.css';
import { LevelChange } from '../Element/LevelChange/LevelChange';
import { Output } from '../Element/Output/Output';
import { PopUp } from '../Element/PopUp/PopUp';
import { StartButton } from '../Element/StartButton/StartButton';
import { SubTitle } from '../Element/SubTitle/SubTitle';
import { TitleHeader } from '../Element/TitleHeader/TitleHeader';
export const MainWrapper = () => {

    return (<>
        <LevelChange />
        <Output />
        <PopUp />
        <StartButton />
        <SubTitle />
        <TitleHeader />
    </>)
}