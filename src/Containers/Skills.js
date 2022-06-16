import React, {useContext} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import DownloadButton from "../Components/Button/DownloadButton";
import skills from "../Assets/skills.png";
import myResume from "../Assets/Reza Kameli - Frontend Dev .pdf"
import SwitchContext from "../Context/ThemeSwitch";

import './Skills.scss';


function Skills() {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='Skills'>
            <SegmentTitle title={"Skills"} src={skills} alt={'Skills'}/>
            <div className='skillItems'>
                <div className='item'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>1</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>React JS</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>An open-source JavaScript library that is used for building user interfaces specifically for
                            single-page applications
                        </h5>
                    </div>
                </div>
                <div className='item2'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>2</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Javascript</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>JavaScript is a text-based programming language used both on the client-side and server-side
                            that allows you to make web pages interactive.</h5>
                    </div>
                </div>
                <div className='item'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>3</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>CSS3-SASS-Emotion</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>Cascading Style Sheets is a stylesheet language used to describe the presentation of a
                            document written in HTML or XML.</h5>
                    </div>
                </div>

                <div className='item2'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>4</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>HTML 5</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>HTML (HyperText Markup Language) is the most basic building block of the Web</h5>
                    </div>
                </div>
                <div className='item'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>5</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Redux - Context</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>Redux is simply a store to store the state of the variables in your app, Redux and Context
                            are a state manager.</h5>
                    </div>
                </div>

                <div className='item2'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>6</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Other Skills</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>Material Ui, Git, npm, Next JS, Photoshop, SEO, Office, Google analysis tools, ...</h5>
                    </div>
                </div>
            </div>
            <DownloadButton content={"Download My Resume"} file={myResume}/>
        </section>
    );
}

export default Skills;
