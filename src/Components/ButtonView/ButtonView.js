import React from "react";
import css from "./ButtonView.module.css";


export default function ButtonView(props){
    const {label,type}=props;
    return (
        <button 
            className={`${css.buttonview} ${props.className||""}`}
            type={type}
        >
            <label>{label||""}</label>
        </button>
    )
}

ButtonView.defaultProps={
    type:"text",
}
