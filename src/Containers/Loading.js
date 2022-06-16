import React from "react";
import loadingAnimation from "../Assets/loadingAnimation.gif"
import './Loading.scss';


function Header() {

    return (
        <div className='loading'>
            <img src={loadingAnimation} alt="loading"/>
        </div>
    );
}

export default Header;
