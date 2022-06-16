import React, {useContext} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import KharazmiLogo from './../Assets/KharazmiLogo.png'
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
                         src={KharazmiLogo}
                         alt=""/>
                    <div>
                        <h2  style={lightTheme ? {} : {color: "#a9a9a9"}}>Kharazmi University</h2>
                        <h3  style={lightTheme ? {} : {color: "#a9a9a9"}}>Master Business Administration</h3>
                        <h4  style={lightTheme ? {} : {color: "#a9a9a9"}}>Master Degree</h4>
                        <h6  style={lightTheme ? {} : {color: "#a9a9a9"}}>2020 - 2022</h6>
                    </div>
                </div>
                <p  style={lightTheme ? {} : {color: "#a9a9a9"}}>Kharazmi University is a major public research university in Iran, named after Khwarizmi (c.
                    780–850), Persian mathematician, astronomer and geographer, offering a wide range of
                    undergraduate and postgraduate programs in a variety of disciplines. Kharazmi University is
                    considered as the oldest institution of higher education in Iran. It was established in 1919 as
                    the Central Teachers' Institute and gained university status as Tarbiat Moallem University of
                    Tehran in 1974. It changed its name to Kharazmi University on January 31, 2012.
                </p>
            </div>
            <div className='universities'
                 style={lightTheme ? {} : {background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                <div className='descriptions'>

                    <img className='uniLogo'
                         src={AzzadUni}
                         alt=""/>
                    <div >
                        <h2  style={lightTheme ? {} : {color: "#a9a9a9"}}>Islamic Azad University, North Tehran Branch</h2>
                        <h3  style={lightTheme ? {} : {color: "#a9a9a9"}}>Industrial Engineering</h3>
                        <h4  style={lightTheme ? {} : {color: "#a9a9a9"}}>Bachelor Degree</h4>
                        <h5  style={lightTheme ? {} : {color: "#a9a9a9"}}>2007 - 2012</h5>
                    </div>
                </div>
                <p  style={lightTheme ? {} : {color: "#a9a9a9"}}>
                    The Islamic Azad University, North Tehran Branch is a branch of the Islamic Azad University. It
                    was founded in 1985 and currently has an enrollment of 34,864 students. The university offers
                    bachelor's degrees, master's degrees and Ph.D.s in 10 colleges. It is located in
                    Hakimiyeh-Tehran Pars, Tehran. The educational area of the university is 35,000 square metres.
                </p>

            </div>

        </section>
    );
}

export default Education;
