import React, {useContext, useEffect, useState} from "react";


import './Profile.scss';
import SegmentTitle from "../Components/SegmentTitle";
import SwitchContext from "../Context/ThemeSwitch";
import {useHistory} from "react-router-dom";
import AdminJobHistory from "../Containers/AdminJobHistory";
import EditBtn from "../Components/Button/EditBtn";
import NormalContactInput from "../Components/Input/NormalContactInput";


function Profile() {
    const {userName,password, login, aboutMe, setAboutMe, jobHistory, setJobHistory,lightTheme} = useContext(SwitchContext);
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
    const [newName,setName]=useState(userName)
    const changeNameHandler=(e)=>{
        setName(e)
    }
    const [newPassword,setPassword]=useState(password)
    const changePasswordHandler=(e)=>{
        setPassword(e)
    }
    const editNameForm=()=>{
        localStorage.setItem('owner', JSON.stringify({"userName": newName, "password": newPassword}))
    }
    return (
        <div className='userProfile'  >
            <SegmentTitle title={`Hello ${userName}`}/>

            <section className='editUserName'>
                <form onSubmit={editNameForm}>
                    <div>
                        <NormalContactInput inputOnchange={changeNameHandler} type={"text"} value={newName}/>
                        <NormalContactInput inputOnchange={changePasswordHandler} type={"text"} value={newPassword}/>
                    </div>
                    <EditBtn content={'UPDATE'} type={"submit"}/>
                </form>
            </section>

            <section className='editAbout'>
                {updateAboutMe ?
                    <form onSubmit={formAboutHandler} action="">
                        <textarea onChange={textareaAboutMeHandler}  >{aboutMe}</textarea>
                        <EditBtn content={'CONFIRM'} type={"submit"}/>
                    </form>
                    : <div style={lightTheme ? {} : {color: "#a9a9a9"}}>{aboutMe}</div>}
                {updateAboutMe ? null : <EditBtn onClick={updateBtnAboutMeHandler} content={'UPDATE'} type={""}/>}
            </section>


            <section className='editJob'>
                {jobHistory.map(item => <AdminJobHistory key={item.id} job={item}/>)}
                <EditBtn content={'ADD JOB'} type={""}/>

            </section>


        </div>
    );
}

export default Profile;
