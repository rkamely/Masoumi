import React, {useContext, useState} from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SwitchContext from "../../Context/ThemeSwitch"
import './ThemeBtn.scss';


function ThemeBtn() {
    const {lightTheme, themeSwitchHandler} = useContext(SwitchContext);

    return (
        <div id='ThemeBtn' className="ThemeBtn" onClick={themeSwitchHandler}>
            {lightTheme ? <DarkModeIcon/> : <LightModeIcon/>}</div>
    );
}

export default ThemeBtn;
