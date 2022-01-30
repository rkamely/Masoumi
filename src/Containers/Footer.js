import React from "react";
import SegmentTitle from "../Components/SegmentTitle";
import NormalContactInput from '../Components/Input/NormalContactInput'
import ButtonContactMe from "../Components/Button/ButtonContactMe";

import './Footer.scss';

function Footer() {
    return (
        <div className="Footer">
            <SegmentTitle title={"برای من پیغام بگذارید"}/>
            <form action="" className='contactForm'>
                <NormalContactInput placeHolder={'نام و نام خانوادگی'}/>
                <NormalContactInput placeHolder={'ایمیل برای مثال example@yahoo.com'}/>
                <NormalContactInput placeHolder={'شماره تماس برای مثال 09125000000'}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='متن پیام'/>
                <ButtonContactMe content={'ارسال'}/>
            </form>
            <div className='signature'>Designed by Reza Kameli @2021</div>
        </div>
    );
}

export default Footer;
