import React from "react";
import AboutMe from "../Containers/AboutMe";
import JobHistory from "../Containers/JobHistory/JobHistory";
import Skills from "../Containers/Skills";
import Education from "../Containers/Education";
import ContactMe from "../Containers/ContactMe";


import './Home.scss';


function Home() {

    return (
        <div className="Home">
            {/*<Slider/>*/}
            <AboutMe/>
            <JobHistory/>
            <Skills/>
            <Education/>
            <ContactMe/>
        </div>
    );
}

export default Home;
