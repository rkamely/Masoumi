import React, {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import SwitchContext from './Context/ThemeSwitch'
import Loading from "./Containers/Loading";

import "./App.scss"
import firstStar from "./Assets/SetarehAvalLogo.png";


function App() {

    const Home = lazy(() => import("./Pages/Home"));
    const Wrapper = lazy(() => import("./HOC/Wrapper"));
    const Profile = lazy(() => import("./Pages/Profile"));
    const [lightTheme, setLightTheme] = useState(JSON.parse(localStorage.getItem('theme')))
    const themeSwitchHandler = () => {
        localStorage.setItem('theme', `${!lightTheme}`)
        setLightTheme(!lightTheme)
    }
    const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')) || false)
    const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('owner')).userName || "ali")
    const [password, setPassword] = useState(JSON.parse(localStorage.getItem('owner')).password || "123")

    let defaultAboutMe = " Innovative frontend developer with over 1 year of experience in developing and maintaining responsive websites focus on UI/UX interface in React JS library. Proficient in code development projects in modern working methodologies Plus, over 5 years of experience in marketing and SEO, make me a comprehensive perspective on different aspects of the business."
    const [aboutMe, setAboutMe] = useState(JSON.parse(localStorage.getItem('aboutMe')) || defaultAboutMe)

    let defaultJobHistory = [
         {
             id:1,
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
        },
         {
             id:2,
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
    ]
    const [jobHistory, setJobHistory] = useState(JSON.parse(localStorage.getItem('jobHistory')) || defaultJobHistory)



    useEffect(() => {
        localStorage.setItem('owner', JSON.stringify({"userName": userName, "password": password}))
        localStorage.setItem('aboutMe', JSON.stringify(aboutMe))
    }, [])

    return (
        <div className="App">
            <Router>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <SwitchContext.Provider value={{
                            lightTheme,
                            themeSwitchHandler,
                            login,
                            setLogin,
                            userName,
                            setUserName,
                            password,
                            setPassword,
                            aboutMe,
                            setAboutMe,
                            jobHistory,
                            setJobHistory,

                        }}>
                            <Wrapper path='/' exact component={Home}/>
                            <Wrapper path='/profile' component={Profile}/>
                        </SwitchContext.Provider>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
