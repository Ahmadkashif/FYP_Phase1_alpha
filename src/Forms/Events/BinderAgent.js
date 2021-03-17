import React, {useState} from "react";

const BinderAgent = (props)=>{

    return(
        <div>
            {props.binderCallback(props.data)}
        </div>
    )
}

export default BinderAgent