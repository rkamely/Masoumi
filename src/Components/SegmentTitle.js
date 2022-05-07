import React, {useContext} from "react";
import SwitchContext from "../Context/ThemeSwitch";

import './SegmentTitle.scss';


function SegmentTitle(props) {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <div className='SegmentTitle'>
            <h1 style={lightTheme ? {} : {color: "#a9a9a9"}}>{props.title}</h1>
            <img src={props.src} alt={props.alt}/>
        </div>
    );
}

export default SegmentTitle;
