import React from "react";


import './ButtonContactMe.scss';

function ButtonContactMe(props) {
    return (
        <button className='ButtonContactMe' type={"submit"}> {props.content} </button>

    );
}

export default ButtonContactMe;
