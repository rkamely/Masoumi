import React, {useContext} from "react";

import './Experience.scss';
import SwitchContext from "../../Context/ThemeSwitch";


function Experience(props) {
    const {lightTheme} = useContext(SwitchContext);
    return (
        <div className='Experience'
             style={lightTheme ? {} : {background: "radial-gradient(circle, rgb(9 17 18) 0%, rgb(21 42 42 / 28%) 100%)"}}>
            <div className='titlesAndLogo'>
                <div>
                    <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>{props.jobTitle}</h2>
                    <h3 style={lightTheme ? {} : {color: "#a9a9a9"}}>{props.company}</h3>
                    <h3 style={lightTheme ? {} : {color: "#a9a9a9"}}>{props.time}</h3>
                </div>
                <img src={props.img} alt=""/>
            </div>
            <h4 style={lightTheme ? {} : {color: "#a9a9a9"}}>Tasks: </h4>
            <div className='tasksItems' style={lightTheme ? {} : {color: "#a9a9a9"}}> {props.Duties}</div>
            <h4 style={lightTheme ? {} : {color: "#a9a9a9"}}> Achievements: </h4>
            <div className='tasksItems'>{props.achievements}</div>
        </div>
    );
}

export default Experience;
