import React, {useState} from "react";
import {scroller} from "react-scroll";

import './Header.scss';
import HamburgerButton from "../Components/Button/HamburgerButton";


function Header() {
    const [open, setOpen] = useState(false)
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos){ {
                document.getElementById("Header").style.top = "0";
                document.getElementById("Header").style.opacity = "1";
            }
        } else {
            document.getElementById("Header").style.top = "-50px";
        }
        prevScrollPos = currentScrollPos;
    }

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
    return (
        <nav id='Header' className="Header">
            <div className={open ? 'rightSide' : 'closeRightSide'}>
                <div className='HamburgerBtn' onClick={mobileMenu}><HamburgerButton open={open}/></div>
                <button onClick={() => scrollToSection('aboutMe')}>درباره من</button>
                <button onClick={() => scrollToSection('Experience')}>تجربیات</button>
                <button onClick={() => scrollToSection('Skills')}>مهارت ها</button>
                <button onClick={() => scrollToSection('Education')}>تحصیلات</button>
            </div>
            <div className='leftSide'>
                سامان
            </div>
        </nav>
    );
}

export default Header;
