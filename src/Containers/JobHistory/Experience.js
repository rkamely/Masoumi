import React, {useContext} from "react";

import './Experience.scss';
import SwitchContext from "../../Context/ThemeSwitch";


function Experience(props) {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <div className='Experience'
             style={lightTheme ? {} : {background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
            <div className='titlesAndLogo'>
                <div>
                    <h1 style={lightTheme ? {} : {color: "#a9a9a9"}}>{props.jobTitle}</h1>
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
