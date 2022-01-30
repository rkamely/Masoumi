import React from "react";

import './Experience.scss';


function Experience(props) {

    return (
        <div className='Experience'>
            <div>
                <div className='titlesAndLogo'>
                    <div>
                        <h1>{props.jobTitle}</h1>
                        <h3>{props.company}</h3>
                        <h3>{props.time}</h3>
                    </div>
                    <img src={props.img} alt=""/>
                </div>
                <p><h4>وظایف :</h4> {props.Duties}</p>
                <p><h4>دستاورد ها : </h4>{props.achivements}</p>
            </div>


        </div>
    );
}

export default Experience;
