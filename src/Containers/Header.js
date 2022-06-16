import React, {useContext, useState} from "react";
import {scroller} from "react-scroll";
import HamburgerButton from "../Components/Button/HamburgerButton";
import ThemeBtn from "../Components/Button/ThemeBtn";
import SwitchContext from "../Context/ThemeSwitch";
import loginIcon from "../Assets/login.png"
import logoutIcon from "../Assets/logout.png"

import './Header.scss';
import NormalContactInput from "../Components/Input/NormalContactInput";
import FooterValidation from "./FooterValidation";
import emailjs from "@emailjs/browser";
import {Login} from "@mui/icons-material";
import LoginValidation from "./LoginValidation";


function Header() {
    const {userName, password, login, setLogin} = useContext(SwitchContext);

    const [open, setOpen] = useState(false)

    const scrollToSection = (e) => {
        setOpen(false)
        scroller.scrollTo(e, {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };
    const mobileMenu = () => {
        setOpen(!open)
    }
    const [contactUsInfo, setContactUsInfo] = useState({
        userName: "",
        password: "",

    })
    const [error, setError] = useState({
        userName: "",
        password: "",
        inCorrect: ""
    })
    const inputOnchange = (value, property) => {
        setContactUsInfo({
            ...contactUsInfo,
            [property]: value,
        })
    }
    const loginFormHandler = (e) => {
        e.preventDefault()
        let cacheUserName = JSON.parse(localStorage.getItem('owner')).userName
        let cachePassword = JSON.parse(localStorage.getItem('owner')).password
        LoginValidation(contactUsInfo, cacheUserName, cachePassword)
            .then(() => {
                    setError({
                        userName: "",
                        password: "",
                        inCorrect: "",
                    })
                    setLogin(true)
                    localStorage.setItem('login', "true")
                }
            )
            .catch((err) => setError(err))
    }


    const [popUp, setPopUp] = useState(false)

    const popUpLoginHandler = () => setPopUp(!popUp)

    const closePopUp = (e) => {
        if (e.target.tagName === "DIV") {
            setPopUp(!popUp)
        }
    }

    const logoutHandler = () => {
        setLogin(false)
        localStorage.setItem('login', "false")
    }

    return (
        <div className='headerRelative'>
            <nav id='Header' className="Header">
                <div className='HamburgerBtn' onClick={mobileMenu}><HamburgerButton open={open}/></div>
                <div className={open ? 'rightSide' : 'closeRightSide'}>
                    <button onClick={() => scrollToSection('aboutMe')}>About Me</button>
                    <button onClick={() => scrollToSection('experience')}>Experience</button>
                    <button onClick={() => scrollToSection('Skills')}>Skills</button>
                    <button onClick={() => scrollToSection('Education')}>Education</button>
                    <button onClick={() => scrollToSection('Footer')}>Contact Me</button>
                </div>
                <div className='leftSide'>
                    {login ? <div className="logout">
                        <a href="/profile">Reza's profile</a>
                        <img onClick={logoutHandler} src={logoutIcon} alt="logout"/>
                    </div> : <img onClick={popUpLoginHandler} src={loginIcon} alt="login"/>}
                    {popUp ? <div onClick={closePopUp} className='loginForm'>
                        <form onSubmit={loginFormHandler}>
                            <h1>Login</h1>
                            {error.inCorrect ?
                                <span style={{color: "red", textAlign: "left"}}>{error.inCorrect}</span> : ""}
                            <NormalContactInput placeHolder={'User name'} inputOnchange={inputOnchange}
                                                property={"userName"}/>
                            {error.userName ?
                                <span style={{color: "red", textAlign: "left"}}>{error.userName}</span> : ""}
                            <NormalContactInput placeHolder={'Password'} type={"password"} inputOnchange={inputOnchange}
                                                property={"password"}/>
                            {error.password ?
                                <span style={{color: "red", textAlign: "left"}}>{error.password}</span> : ""}
                            <button type="submit">Submit</button>
                        </form>
                    </div> : null}
                    <ThemeBtn/>
                </div>
            </nav>
        </div>
    );
}

export default Header;
