import React from "react";
import css from "./InputField.module.css";


export default function InputField(props){
    const {label,type,placeholder,multiline,value,onChange}=props;
    const TextTag=multiline?"textarea":"input";
    return (
        <div className={css.inputfield}>
            <label className={css.label}>{label||""}</label>
            <TextTag 
                className={css.input} 
                type={type} placeholder={placeholder}
                defaultValue={value}
                onChange={onChange&&((event)=>{
                    let value=event.target.value?.trim();
                    if(type==="number"){
                        value=parseFloat(value);
                    }
                    onChange(value);
                })}
            />
        </div>
    )
}

InputField.defaultProps={
    type:"text",
    multiline:false,
}
