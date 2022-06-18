import React, {useContext} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import khajeh from './../Assets/khajeh.png'
import AzzadUni from './../Assets/AzadUniversity.png'
import './Education.scss';

import education from "../Assets/education.png";
import SwitchContext from "../Context/ThemeSwitch";


function Education() {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='Education'>
            <SegmentTitle title={"Education"} src={education} alt={'Education'}/>
            <div className='universities'
                 style={lightTheme ? {} : {background: "radial-gradient(circle, rgb(9 17 18) 0%, rgb(21 42 42 / 28%) 100%)"}}>

                <div className='descriptions'>
                    <img className='uniLogo'
                         src={AzzadUni}
                         alt=""/>
                    <div>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}>Islamic Azad University</h2>
                        <h3 style={lightTheme ? {} : {color: "#a9a9a9"}}>Master Business Administration</h3>
                        <h4 style={lightTheme ? {} : {color: "#a9a9a9"}}>Master Degree</h4>
                        <h6 style={lightTheme ? {} : {color: "#a9a9a9"}}>2016 - 2018</h6>
                    </div>
                </div>
                <p style={lightTheme ? {} : {color: "#a9a9a9"}}>
                    The Islamic Azad University, North Tehran Branch is a branch of the Islamic Azad University. It
                    was founded in 1985 and currently has an enrollment of 34,864 students. The university offers
                    bachelor's degrees, master's degrees and Ph.D.s in 10 colleges. It is located in
                    Hakimiyeh-Tehran Pars, Tehran. The educational area of the university is 35,000 square metres.
                </p>
            </div>
            <div className='universities'
                 style={lightTheme ? {} : {background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                <div className='descriptions'>

                    <img className='uniLogo'
                         src={khajeh}
                         alt=""/>
                    <div>
                        <h2 style={lightTheme ? {} : {color: "#a9a9a9"}}> Khajeh Nasir al-Din Toosi University</h2>
                        <h3 style={lightTheme ? {} : {color: "#a9a9a9"}}>Computer Engineering</h3>
                        <h4 style={lightTheme ? {} : {color: "#a9a9a9"}}>Bachelor Degree</h4>
                        <h5 style={lightTheme ? {} : {color: "#a9a9a9"}}>2008 - 2012</h5>
                    </div>
                </div>
                <p style={lightTheme ? {} : {color: "#a9a9a9"}}>
                    Khajeh Nasir al-Din Toosi University of Technology (KNTU) (Persian: دانشگاه صنعتی خواجه نصيرالدين
                    طوسی), also known as K. N. Toosi University of Technology, is a public research university in
                    Tehran, Iran. It is named after medieval Persian scholar Khajeh Nasir Toosi. The university is
                    considered one of the most prestigious institutions of higher education in Iran. Acceptance to the
                    university is highly competitive, entrance to undergraduate and graduate programs typically requires
                    scoring among the top 1% of students in the Iranian University Entrance Exam.
                </p>

            </div>

        </section>
    );
}

export default Education;
