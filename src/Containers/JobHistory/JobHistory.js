import React, {useContext} from "react";
import SegmentTitle from "../../Components/SegmentTitle";
import Experience from "./Experience";
import experience from '../../Assets/experience.png'
import SwitchContext from "../../Context/ThemeSwitch";

import './JobHistory.scss'

function JobHistory() {
    const {jobHistory} = useContext(SwitchContext);
    const {lightTheme} = useContext(SwitchContext);
    return (
        <section className='experience'>
            <SegmentTitle title={"My Experience"} src={experience} alt={'My Experience'}/>
            <div className="parent">
                {jobHistory.map((item) =>
                    <div className='rightSide'>
                        <Experience jobTitle={item.jobTitle} company={item.companyName}
                                    time={item.time}
                                    Duties={
                                        item.task.map(item =>
                                            <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                        )
                                    }
                                    achievements={
                                        item.achievements.map(item =>
                                            <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                        )
                                    }
                                    img={item.logoCompany}/>
                    </div>)}


                {/*<div className='rightSide'>*/}
                {/*    <Experience jobTitle={frontendDevStar.jobTitle} company={frontendDevStar.companyName}*/}
                {/*                time={frontendDevStar.time}*/}
                {/*                Duties={*/}
                {/*                    frontendDevStar.task.map(item =>*/}
                {/*                        <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>*/}
                {/*                    )*/}
                {/*                }*/}
                {/*                achievements={*/}
                {/*                    frontendDevStar.achievements.map(item =>*/}
                {/*                        <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>*/}
                {/*                    )*/}
                {/*                }*/}
                {/*                img={frontendDevStar.logoCompany.firstStar}/>*/}
                {/*</div>*/}
                {/*<div className='leftSide'>*/}
                {/*    <Experience jobTitle={digitalMarketerStar.jobTitle} company={digitalMarketerStar.companyName}*/}
                {/*                time={digitalMarketerStar.time}*/}
                {/*                Duties={*/}
                {/*                    digitalMarketerStar.task.map(item =>*/}
                {/*                        <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>*/}
                {/*                    )*/}
                {/*                }*/}
                {/*                achievements={*/}
                {/*                    digitalMarketerStar.achievements.map(item =>*/}
                {/*                        <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>*/}
                {/*                    )*/}
                {/*                }*/}
                {/*                img={digitalMarketerStar.logoCompany.firstStar}/>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}

export default JobHistory;
