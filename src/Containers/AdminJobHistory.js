import React, {useContext, useEffect, useState} from "react";


import SwitchContext from "../Context/ThemeSwitch";


function AdminJobHistory({job}) {
    const {userName, login, aboutMe, setAboutMe, jobHistory, setJobHistory} = useContext(SwitchContext);

    //Update My Experience
    const [updateBtnJob, setUpdateBtnJob] = useState(false)
    const updateBtnJobHandler = () => {
        setUpdateBtnJob(!updateBtnJob)
    }

    const [jobTitle, setJobTitle] = useState(job.jobTitle)
    const changeJobTitleHandler = (e) => {
        setJobTitle(e.target.value)
    }

    const [companyName, setCompanyName] = useState(job.companyName)
    const companyNameHandler = (e) => {
        setCompanyName(e.target.value)
    }

    const [time, setTime] = useState(job.time)
    const timeHandler = (e) => {
        setTime(e.target.value)
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
    console.log(job)

    const [addTask, setAddTask] = useState(false)
    const addTaskHandler = () => {
        setAddTask(!addTask)
    }
    const addTaskFormHandler = (e) => {
        e.preventDefault()
        setAddTask(!addTask)

    }
    const [addAchievement, setAddAchievement] = useState(false)
    const addAchievementHandler = () => {
        setAddAchievement(!addAchievement)
    }
    const addAchievementFormHandler = (e) => {
        e.preventDefault()
        setAddAchievement(!addAchievement)
    }
    return (
        <div>
            {
                updateBtnJob ?
                    <form onSubmit={formJobHistoryHandler}>
                        <div>
                            <span>Job title:</span>
                            <input onChange={changeJobTitleHandler} type="text" value={jobTitle}
                                   contentEditable={true}/>
                        </div>
                        <div>
                            <span>Company name:</span>
                            <input onChange={companyNameHandler} type="text" value={companyName}/>
                        </div>
                        <div>
                            <span>Time:</span>
                            <input onChange={timeHandler} type="text" value={time}/>
                        </div>

                        <div>
                            <span>Tasks:</span>
                            {job.task.map(item => <textarea>{item}</textarea>)}
                            {addTask ?
                                <form onSubmit={addTaskFormHandler}>
                                    <input type="text"/>
                                    <button type="submit">ADD</button>
                                </form> :
                                <button onClick={addTaskHandler}>ADD TASKS</button>}
                        </div>

                        <div>
                            <span>Achievements:</span>
                            {job.achievements.map(item => <textarea>{item}</textarea>)}
                            {addAchievement ?
                                <form onSubmit={addAchievementFormHandler}>
                                    <input type="text"/>
                                    <button type="submit">ADD</button>
                                </form> :
                                <button onClick={addAchievementHandler}>ADD ACHIEVEMENT</button>}
                        </div>

                        <button type="submit">CONFIRM</button>
                    </form> :
                    <div>
                        <div>{job.jobTitle}</div>
                        <button onClick={updateBtnJobHandler}>UPDATE</button>
                    </div>
            }
        </div>

    );
}

export default AdminJobHistory;
