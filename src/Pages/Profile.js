import React, {useContext, useEffect, useState} from "react";


import './Profile.scss';
import SegmentTitle from "../Components/SegmentTitle";
import SwitchContext from "../Context/ThemeSwitch";
import {useHistory} from "react-router-dom";
import AdminJobHistory from "../Containers/AdminJobHistory";


function Profile() {
    const {userName, login, aboutMe, setAboutMe, jobHistory, setJobHistory} = useContext(SwitchContext);
    const history = useHistory()
    useEffect(() => {
        if (!login) {
            history.push("./")
        }
    })
    //Update About ME
    const [updateAboutMe, setUpdateAboutMe] = useState(false)
    const updateBtnAboutMeHandler = () => {
        setUpdateAboutMe(!updateAboutMe)
    }
    const [textareaAbout, setTextareaAbout] = useState()
    const textareaAboutMeHandler = (e) => {
        setTextareaAbout(e.target.value)
    }
    const formAboutHandler = () => {
        setAboutMe(textareaAbout ? textareaAbout : aboutMe)
        setUpdateAboutMe(!updateAboutMe)
        localStorage.setItem('aboutMe', JSON.stringify(textareaAbout ? textareaAbout : aboutMe))
    }
    //Update My Experience
    const [updateBtnJob, setUpdateBtnJob] = useState(false)
    const updateBtnJobHandler = () => {
        setUpdateBtnJob(!updateBtnJob)
    }
    return (
        <div className='userProfile'>
            <SegmentTitle title={`Hello ${userName}`}/>

            <section>
                {updateAboutMe ?
                    <form onSubmit={formAboutHandler} action="">
                        <textarea onChange={textareaAboutMeHandler}>{aboutMe}</textarea>
                        <button type="submit">CONFIRM</button>
                    </form>
                    : <div>{aboutMe}</div>}
                {updateAboutMe ? null : <button onClick={updateBtnAboutMeHandler}>UPDATE</button>}
            </section>



            <section>
                {jobHistory.map(item=> <AdminJobHistory key={item.id} job={item}/>)}
            </section>



        </div>
    );
}

export default Profile;
