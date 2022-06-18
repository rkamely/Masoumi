import React, {useContext} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import aboutMe from '../Assets/aboutMe2.png'
import SwitchContext from "../Context/ThemeSwitch";

import './AboutMe.scss'


function AboutMe() {
    const {lightTheme, aboutMe} = useContext(SwitchContext);

    return (
        <section className='aboutMe'>
            {/*<SegmentTitle title={"About Me"} src={aboutMe} alt={'About Me'}/>*/}
            <h1 style={lightTheme ? {} : {color: "#a9a9a9"}}>PRODUCT MANAGER</h1>
            <div className='contentَAboutMe'>
                <p className='textAboutMe' style={lightTheme ? {} : {color: "#a9a9a9"}}>
                    {aboutMe}
                </p>
                <div className='imgFrame'/>

            </div>
        </section>
    );
}

export default AboutMe;
