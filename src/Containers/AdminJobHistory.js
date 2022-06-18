import React, {useContext, useEffect, useState} from "react";


import SwitchContext from "../Context/ThemeSwitch";
import EditBtn from "../Components/Button/EditBtn";
import './AdminJobHistory.scss'
import NormalContactInput from "../Components/Input/NormalContactInput";


function AdminJobHistory({job}) {
    const {userName, login, aboutMe, setAboutMe, jobHistory, setJobHistory,lightTheme} = useContext(SwitchContext);

    //Update My Experience
    const [updateBtnJob, setUpdateBtnJob] = useState(false)
    const updateBtnJobHandler = () => {
        setUpdateBtnJob(!updateBtnJob)
    }

    const [jobTitle, setJobTitle] = useState(job.jobTitle)
    const changeJobTitleHandler = (e) => {
        setJobTitle(e)
    }

    const [companyName, setCompanyName] = useState(job.companyName)
    const companyNameHandler = (e) => {
        setCompanyName(e)
    }

    const [time, setTime] = useState(job.time)
    const timeHandler = (e) => {
        setTime(e)
    }


    const formJobHistoryHandler = (e) => {
        e.preventDefault()
        setJobHistory(prevState => prevState.map(item => (item.id === job.id) ?
            {
                ...item,
                jobTitle: jobTitle,
                companyName: companyName,
                time: time
            } : item));
        // localStorage.setItem('aboutMe', JSON.stringify(textareaAbout ? textareaAbout : aboutMe))


    }

    const [addTask, setAddTask] = useState(false)
    const addTaskHandler = () => {
        setAddTask(!addTask)
    }

    const [addAchievement, setAddAchievement] = useState(false)
    const addAchievementHandler = () => {
        setAddAchievement(!addAchievement)
    }
    return (
        <div className='jobTitle'>
            {
                updateBtnJob ?
                    <form onSubmit={formJobHistoryHandler}>
                        <div className='oneLineProperty'>
                            <span style={lightTheme ? {} : {color: "#a9a9a9"}} >Job title:</span>
                            <NormalContactInput inputOnchange={changeJobTitleHandler} type={"text"} value={jobTitle}/>

                        </div>
                        <div className='oneLineProperty'>
                            <span style={lightTheme ? {} : {color: "#a9a9a9"}} >Company name:</span>
                            <NormalContactInput inputOnchange={companyNameHandler} type={"text"} value={companyName}/>
                        </div>
                        <div className='oneLineProperty'>
                            <span style={lightTheme ? {} : {color: "#a9a9a9"}}>Time:</span>
                            <NormalContactInput inputOnchange={timeHandler} type={"text"} value={time}/>
                        </div>

                        <div className='multiLineProperty'>
                            <div style={lightTheme ? {} : {color: "#a9a9a9"}}>Tasks:</div>
                            {job.task.map(item => <NormalContactInput type={"text"} value={item}/>)}
                            {addTask ?
                                <div>
                                    <NormalContactInput type={"text"}/>
                                    <EditBtn content={'ADD'} type={"submit"}/>
                                </div> :
                                <EditBtn onClick={addTaskHandler} content={'ADD'} type={""}/>}
                        </div>

                        <div className='multiLineProperty'>
                            <div style={lightTheme ? {} : {color: "#a9a9a9"}}>Achievements:</div>
                            {job.achievements.map(item => <NormalContactInput type={"text"} value={item}/>)}
                            {addAchievement ?
                                <form>
                                    <NormalContactInput type={"text"}/>
                                    <EditBtn content={'ADD'} type={"submit"}/>
                                </form> :
                                <EditBtn onClick={addAchievementHandler} content={'ADD'} type={""}/>}
                        </div>
                        <EditBtn content={'CONFIRM'} type={"submit"}/>
                    </form> :
                    <div className='updateJob'>
                        <div style={lightTheme ? {} : {color: "#a9a9a9"}}>{job.jobTitle}</div>
                        <EditBtn onClick={updateBtnJobHandler} content={'UPDATE'} type={""}/>
                    </div>
            }
        </div>

    );
}

export default AdminJobHistory;
