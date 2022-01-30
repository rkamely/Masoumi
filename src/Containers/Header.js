import React, {useState} from "react";
import {scroller} from "react-scroll";

import './Header.scss';
import HamburgerButton from "../Components/Button/HamburgerButton";


function Header() {
    const [open, setOpen] = useState(false)
    // let prevScrollPos = window.pageYOffset;
    //
    // window.onscroll = function () {
    //     let currentScrollPos = window.pageYOffset;
    //     if (prevScrollPos > currentScrollPos) {
    //         {
    //             document.getElementById("Header").style.height = "50px";
    //             document.getElementById("Header").style.opacity = "1";
    //         }
    //     } else {
    //         document.getElementById("Header").style.height = "65px";
    //     }
    //     prevScrollPos = currentScrollPos;
    // }

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
    return (<div className='headerRelative'>
            <nav id='Header' className="Header">
                <div className='HamburgerBtn' onClick={mobileMenu}><HamburgerButton open={open} /></div>
                <div className={open ? 'rightSide' : 'closeRightSide'}>
                    <button onClick={() => scrollToSection('aboutMe')}>درباره من</button>
                    <button onClick={() => scrollToSection('experience')}>تجربیات</button>
                    <button onClick={() => scrollToSection('Skills')}>مهارت ها</button>
                    <button onClick={() => scrollToSection('Education')}>تحصیلات</button>
                    <button onClick={() => scrollToSection('Footer')}>تماس با من</button>

                </div>
                <div className='leftSide'>
                    سامان
                </div>
            </nav>
        </div>
    );
}

export default Header;
