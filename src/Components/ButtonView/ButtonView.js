import React from "react";
import css from "./ButtonView.module.css";


export default function ButtonView(props){
    const {type,label,icon,onClick}=props;
    return (
        <button 
            className={`${css.buttonview} ${props.className||""}`}
            type={type} style={props.style}
            onClick={onClick||undefined}
        >
            <label>{label||""}</label>
            {icon&&<img alt="" src={typeof(icon)==="function"?icon(backgroundColor):icon}/>}
        </button>
    )
}

ButtonView.defaultProps={
    type:"button",
}
