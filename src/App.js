import React, {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import SwitchContext from './Context/ThemeSwitch'
import Loading from "./Containers/Loading";

import "./App.scss"


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
    const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('userName')) || "ali")
    const [password, setPassword] = useState(JSON.parse(localStorage.getItem('password')) || "123")
    console.log(JSON.parse(localStorage.getItem('password')))
    let defaultAboutMe = "I am Ali Masoumi, Highly capable product manager with 4+ years’ experience in fast-paced tech environments. Dedicated to developing innovative, valuable and successful products that meet customers’ needs. Collaborative and analytical with good business sense and strong interpersonal abilities."
    const [aboutMe, setAboutMe] = useState(JSON.parse(localStorage.getItem('aboutMe')) || defaultAboutMe)

    let defaultJobHistory = [
        {
            id: 1,
            jobTitle: 'Product Manager',
            companyName: 'Setareh Aval',
            time: '2016/11-Present',
            task: [
                "Understanding and representing user needs.",
                "Monitoring the market and developing competitive analyses.",
                "Defining a vision for a product.",
                "Aligning stakeholders around the vision for the product. ",
                "Prioritizing product features and capabilities.",
                "Creating a shared brain across larger teams to empower independent decision-making.",
            ],
            achievements: [
                "Implemented mobile payment (MPS)",
                "Implemented mobile payment based on NFC.",
                "implemented and lunched USSD code *1# .",
                "Get Pardakhtyari licence.",
            ],
            logoCompany: "SetarehAvalLogo.png",
        },
        {
            id: 2,
            jobTitle: 'Product Manager',
            companyName: 'Sayan card',
            time: '2015/08-2015/11',
            task: [
                "Help Create and Manage the Product Roadmap.",
                "Execute and Manage the Product Vision.",
                "Conduct Market Research to Look for Gaps.",
                "Realize and Tackle Risk.",
                "Collaborate and Communicate with the Product Team.",
            ],
            achievements: [
                "Developed offline switches",
            ],
            logoCompany: "sayan.png",
        },
        {
            id: 3,
            jobTitle: 'Project Manager',
            companyName: 'Shahr Bank',
            time: '2014/09-2015/08',
            task: [
                "Setting project goals and coming up with plans to meet those goals.",
                "Maintaining project timeframes, budgeting estimates and status reports.",
                "Managing resources for projects, such as computer equipment and employees.",
                "Coordinating project team members and developing schedules and individual responsibilities.",
                "Implementing IT strategies that deliver projects on schedule and within budget.",
                "Using project management tools to track project performance and schedule adherence.",
                "Conducting risk assessments for projects.",
                "Organizing meetings to discuss project goals and progress.",
            ],
            achievements: [
                "Lunched intelligence citizen card issuance system.",
                "lunched student citizenship card system.",
                "lunched citizen card inspector system.",
            ],
            logoCompany: "shahr.jpg",
        },
        {
            id: 4,
            jobTitle: 'IT Expert',
            companyName: 'Ministry of Communications and Information Technology',
            time: '2012/10-2014/05',
            task: [
                "Installing new software and hardware components.",
                "Regularly evaluating our IT systems to ensure they meet the necessary demands.",
                "Assisting with network administration tasks.",
                "Ensuring data storage is safe and secure.",
                "Resolving all issues coworkers have with their IT systems and software.",
            ],
            achievements: [],
            logoCompany: "ministry.png",
        },
    ]
    const [jobHistory, setJobHistory] = useState(JSON.parse(localStorage.getItem('jobHistory')) || defaultJobHistory)


    useEffect(() => {
        localStorage.setItem('userName', JSON.stringify(userName))
        localStorage.setItem('password', JSON.stringify(password))

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
