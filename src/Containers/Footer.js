import React, {useContext, useEffect, useState} from "react";
import SegmentTitle from "../Components/SegmentTitle";
import NormalContactInput from '../Components/Input/NormalContactInput'
import ButtonContactMe from "../Components/Button/ButtonContactMe";
import FooterValidation from "./FooterValidation";

import './Footer.scss';
import contactMe from "../Assets/contactMe.png";
import SwitchContext from "../Context/ThemeSwitch";

function Footer() {
    const [contactUsInfo, setContactUsInfo] = useState({
        email: "",
        message: "",
    })
    const [error, setError] = useState({
        email: "",
        message: "",
    })
    const inputOnchange = (value, property) => {
        setContactUsInfo({
            ...contactUsInfo,
            [property]: value,
        })
    }

    const handleContactUsForm = (e) => {
        e.preventDefault()
        FooterValidation(contactUsInfo)
            .then((resolve) => resolve)
            .catch((err) => setError(err))
    }
    const {lightTheme} = useContext(SwitchContext);

    return (
        <div className="Footer">
            <SegmentTitle title={"Contact Me"} src={contactMe} alt={'Contact Me'}/>
            <form action="" className='contactForm' onSubmit={handleContactUsForm}>
                <NormalContactInput placeHolder={'First Name & Last Name'}/>
                <NormalContactInput placeHolder={'Email e.g. example@yahoo.com *'} inputOnchange={inputOnchange}
                                    property={"email"}/>
                {error.email ? <span style={{color: "red", textAlign: "left"}}>{error.email}</span> : ""}
                <NormalContactInput placeHolder={'Phone No. e.g. +989125000000'}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message *'
                          onChange={e => inputOnchange(e.target.value, "message")}
                          style={lightTheme ? {} : {background: "#d2d3d3"}}/>
                {error.message ? <span style={{color: "red", textAlign: "left"}}>{error.message}</span> : ""}
                <ButtonContactMe content={'Send Me'}/>
            </form>
            <div className='signature'><span style={{textAlign: "left"}}>Designed By Reza Kameli @2021</span></div>
        </div>
    );
}

export default Footer;
