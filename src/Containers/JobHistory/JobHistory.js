import React, {useContext} from "react";
import SegmentTitle from "../../Components/SegmentTitle";
import Experience from "./Experience";
import experience from '../../Assets/experience.png'
import firstStar from '../../Assets/SetarehAvalLogo.png'
import './JobHistory.scss';
import SwitchContext from "../../Context/ThemeSwitch";

function JobHistory() {
    const frontendDevStar =
        {
            jobTitle: 'Frontend Developer',
            companyName: 'Setareh Aval',
            time: '2021-Present',
            task: ["Translate wireframes, graphical mock-ups, and prototypes into working web pages.",
                "Develop and Implement landing pages for new campaigns by using Sass,Material UI, React Icon,….",
                "Develop responsive Ui/UX interfaces.",
                "Monitor and optimize websites and application continuously to improve user experience and increase CRT.",
                "Implement new forms and modules based on sales and marketing department request.",
                "Implement Restful APIs in website.",
                "Upload new versions of project to Git repository for review and acceptance of team leader.",
                "Use the most up to date standards and practices to assure the quality of the code."
            ],
            achievements: [
                "Implemented setaresim.com based on React technology",
                "Implemented 3 responsive landing pages.",
                "Developed and maintained a panel dashboard for B2B team and Implemented multiple graphs upon request of the sales team.",
                "Implemented Cart by using redux technology.",
                "Implemented Google map API.",
                "Optimized websites for maximum speed and scalability.",
            ],
            logoCompany: {firstStar},
        }
    const digitalMarketerStar =
        {
            jobTitle: 'Digital Marketing Specialist',
            companyName: 'Setareh Aval',
            time: '2016-2021',
            task: [
                "Responsible for executing digital advertising campaigns in addition to assisting with the development of digital marketing strategies.",
                "Continually test, analyze and optimize target criteria, content,landingpages to increase open, click and conversion rates.",
                " Consult, design, implement and publish responsive designed registration web pages and templates to support marketing.",
                "Used Google Analytics to track the effectiveness of social mediainitiatives. Optimization of Social media campaigns.",
                "Expert in using web analytics tools like Google analytics, Web Trends in order to analyze Traffic trends, Visitor behavior, and measure success of SEO/SEM/PPC campaigns.",
                "Produced monthly performance reports for clients for SEM programs utilizing reporting tools such as Google Analytics; determined key metrics that were of primary importance to clients and provided trending data to compare results month-by-month.",
            ],
            achievements: [
                "Implemented SEO strategies for client websites including layout,content optimization, keyword structuring, etc.",
                "Set up Google Adwords advertising campaigns including keywords and campaign filters for future marketing opportunities.",
                "Implemented ECRM system for sending email and SMS based on our algorithm to returning them in website.",
            ],
            logoCompany: {firstStar},
        }
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='experience'>
            <SegmentTitle title={"My Experience"} src={experience} alt={'My Experience'}/>
            <div className="parent">
                <div className='rightSide'>
                    <Experience jobTitle={frontendDevStar.jobTitle} company={frontendDevStar.companyName}
                                time={frontendDevStar.time}
                                Duties={
                                    frontendDevStar.task.map(item =>
                                        <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                    )
                                }
                                achievements={
                                    frontendDevStar.achievements.map(item =>
                                        <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                    )
                                }
                                img={frontendDevStar.logoCompany.firstStar}/>
                </div>
                <div className='leftSide'>
                        <Experience jobTitle={digitalMarketerStar.jobTitle} company={digitalMarketerStar.companyName}
                                    time={digitalMarketerStar.time}
                                    Duties={
                                        digitalMarketerStar.task.map(item =>
                                            <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                        )
                                    }
                                    achievements={
                                        digitalMarketerStar.achievements.map(item =>
                                            <p key={item.index} style={lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                        )
                                        }
                                    img={digitalMarketerStar.logoCompany.firstStar}/>
                </div>
            </div>
        </section>
    );
}

export default JobHistory;
