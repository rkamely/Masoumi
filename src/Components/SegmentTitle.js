import React from "react";

import './SegmentTitle.scss';


function SegmentTitle(props) {
    return (
        <div className='SegmentTitle'>
            <h1>{props.title}</h1>
            <img src={props.src} alt={props.alt}/>
        </div>
    );
}

export default SegmentTitle;
