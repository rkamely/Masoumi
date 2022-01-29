import React from "react";

import './Experience.scss';


function Experience(props) {

    return (
        <div className='Experience'>
            <div>
                <div className='titlesAndLogo'>
                    <div>
                        <h3>{props.jobTitle}</h3>
                        <h4>{props.company}</h4>
                        <h5>{props.time}</h5>
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
