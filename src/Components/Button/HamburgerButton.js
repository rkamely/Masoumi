import React, {useEffect} from "react";


import './HamburgerButton.scss';

function HamburgerButton(props) {

    window.onload = function () {

        let navOpen = document.getElementById("nav-open");

        function addNavActive () {
            if (navOpen.classList.contains("nav-active")||props.open) {
                navOpen.className = "nav-open"
            }
            else {
                navOpen.className += " nav-active nav-open"
            }
        }
        navOpen.addEventListener("click", addNavActive, false);
    }

    return (
        <div className="nav-inactive" id="nav-open">
            <span/>
            <span/>
            <span/>
        </div>
    );
}

export default HamburgerButton;
