import React, {useContext} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import aboutMe from '../Assets/aboutMe2.png'
import SwitchContext from "../Context/ThemeSwitch";

import './AboutMe.scss';


function AboutMe() {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='aboutMe'>
            <SegmentTitle title={"About Me"} src={aboutMe} alt={'About Me'}/>
                <div className='contentَAboutMe'>
                    <p className='textAboutMe' style={lightTheme ? {} : {color: "#a9a9a9"}}>
                        Innovative frontend developer with over 1 year of experience in developing and maintaining
                        responsive websites focus on UI/UX interface in React JS library. Proficient in code
                        development
                        projects in modern working methodologies Plus, over 5 years of experience in marketing and
                        SEO, make
                        me a comprehensive perspective on different aspects of the business.
                    </p>
                    <div className='imgFrame'/>
                </div>
        </section>
    );
}

export default AboutMe;
