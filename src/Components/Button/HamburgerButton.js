import React, {useEffect, useState} from "react";


import './HamburgerButton.scss';

function HamburgerButton(props) {

    return (
        <div className={props.open ? "nav-active , nav-open" : "nav-open"}>
            <span/>
            <span/>
            <span/>
        </div>
    );
}

export default HamburgerButton;
