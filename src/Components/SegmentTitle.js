import React, {useContext} from "react";
import SwitchContext from "../Context/ThemeSwitch";

import './SegmentTitle.scss';


function SegmentTitle({src,alt,title}) {
    const {lightTheme} = useContext(SwitchContext);

    return (


        <div className='SegmentTitle' >
            <h1 style={lightTheme ? {} : {color: "#a9a9a9"}}>{title}</h1>
            <img src={src} alt={alt}/>
        </div>

    );
}

export default SegmentTitle;
