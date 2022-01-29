import React from "react";

import './SegmentTitle.scss';


function SegmentTitle(props) {

    return (
        <div className='SegmentTitle'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default SegmentTitle;
