import React from "react";

import './NormalContactInput.scss';

function NormalContactInput(props) {
    return (
            <input className='normalContactInput' type="text" placeholder={props.placeHolder}/>
    );
}
export default NormalContactInput;
