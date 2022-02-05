import React from "react";
import SegmentTitle from "../Components/SegmentTitle";
import NormalContactInput from '../Components/Input/NormalContactInput'
import ButtonContactMe from "../Components/Button/ButtonContactMe";

import './Footer.scss';
import contactMe from "../Assets/contactMe.png";

function Footer() {
    return (
        <div className="Footer">
            <SegmentTitle title={"برای من پیغام بگذارید"}src={contactMe} alt={'تماس با من'}/>
            <form action="" className='contactForm'>
                <NormalContactInput placeHolder={'نام و نام خانوادگی'}/>
                <NormalContactInput placeHolder={'ایمیل برای مثال example@yahoo.com'}/>
                <NormalContactInput placeHolder={'شماره تماس برای مثال 09125000000'}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='متن پیام'/>
                <ButtonContactMe content={'ارسال'}/>
            </form>
            <div className='signature'><span>طراحی شده توسط رضا کاملی - 1400</span></div>
        </div>
    );
}

export default Footer;
