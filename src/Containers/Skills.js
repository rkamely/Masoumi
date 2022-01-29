import React from "react";
import SegmentTitle from "../Components/SegmentTitle";
import DownloadButton from "../Components/Button/DownloadButton";

import './Skills.scss';


function Skills() {

    return (
        <section className='Skills'>
            <SegmentTitle title={"مهارت ها"}/>
            <div className='skillItems'>
                <div className='item'>
                    <div className='shadow'/>
                    <div className='number'><span>1</span></div>
                    <div className='contentSkills'>
                        <h1>ریکت</h1>
                        <h3>کتابخانه جاوا اسکریپت که برای طراحی سایت های SPA استفاده می شود</h3>
                    </div>
                </div>

                <div className='item2'>
                    <div className='shadow2'/>
                    <div className='number2'><span>2</span></div>
                    <div className='contentSkills'>
                        <h1>ریکت</h1>
                        <h3>کتابخانه جاوا اسکریپت که برای طراحی سایت های SPA استفاده می شود</h3>
                    </div>
                </div>

                <div className='item'>
                    <div className='shadow'/>
                    <div className='number'><span>3</span></div>
                    <div className='contentSkills'>
                        <h1>ریکت</h1>
                        <h3>کتابخانه جاوا اسکریپت که برای طراحی سایت های SPA استفاده می شود</h3>
                    </div>
                </div>

                <div className='item2'>
                    <div className='shadow2'/>
                    <div className='number2'><span>4</span></div>
                    <div className='contentSkills'>
                        <h1>ریکت</h1>
                        <h3>کتابخانه جاوا اسکریپت که برای طراحی سایت های SPA استفاده می شود</h3>
                    </div>
                </div>
            </div>

            <DownloadButton/>
        </section>
    );
}

export default Skills;
