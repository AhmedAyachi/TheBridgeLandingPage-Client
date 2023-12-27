import React from "react";
import css from "./TextField.module.css";


export default function TextField(props){
    const {label,type,placeholder,multiline}=props;
    const TextTag=multiline?"textarea":"input";
    return (
        <div className={css.textfield}>
            <label className={css.label}>{label||""}</label>
            <TextTag 
                className={css.input} 
                type={type} placeholder={placeholder}
            />
        </div>
    )
}

TextField.defaultProps={
    type:"text",
    multiline:false,
}
