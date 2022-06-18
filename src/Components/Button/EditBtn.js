import React from "react";

import './EditBtn.scss';


function EditBtn({content,type,onClick}) {


    return (
        <button onClick={onClick} type={type} className='editBtn' >{content}</button>
    );
}

export default EditBtn;
