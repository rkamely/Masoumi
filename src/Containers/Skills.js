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
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Communication skills</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}> these professionals are regularly having to
                            speak or write in a way that conveys their objectives and priorities in an
                            easy-to-understand manner. </h5>
                    </div>
                </div>
                <div className='item2'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>2</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Technical expertise</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>able to work with the engineers on my team
                            to identify performance bugs and ensure the product is up to par in terms of function,
                            design and user experience.</h5>
                    </div>
                </div>
                <div className='item'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>3</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Business skills</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>understanding basic business competencies to
                            effectively do their jobs</h5>
                    </div>
                </div>

                <div className='item2'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>4</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Research skills</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>These professionals regularly perform extensive
                            market research to determine what type of products their consumers need as well as where the
                            competition stands in relation to your organization. </h5>
                    </div>
                </div>
                <div className='item'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>5</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Analytical skills</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>analyze and use this data to make educated
                            product decisions. </h5>
                    </div>
                </div>

                <div className='item2'
                     style={lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>6</span></div>
                    <div className='contentSkills'>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Marketing skills</h2>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}> Marketing skills include the ability to
                            promote and deliver products and services in the most successful way possible.</h5>
                    </div>
                </div>
            </div>
            <DownloadButton content={"Download My Resume"} file={"resume.pdf"}/>
        </section>
    );
}

export default Skills;
