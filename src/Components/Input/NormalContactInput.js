import React, {useContext} from "react";

import './NormalContactInput.scss';
import SwitchContext from "../../Context/ThemeSwitch";

function NormalContactInput({inputOnchange, property, placeHolder, value, type}) {

    const {lightTheme} = useContext(SwitchContext);

    return (
        <input onChange={e => inputOnchange(e.target.value, property)}
               className='normalContactInput' type={`${type ? type : "text"}`}
               placeholder={placeHolder}
               style={lightTheme ? {} : {background: "#d2d3d3"}}
        />
    );
}

export default NormalContactInput;
