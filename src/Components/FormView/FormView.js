import React, {useRef} from "react";
import css from "./FormView.module.css";
import InputField from "./InputField/InputField";
import {ButtonView} from "Components";


export default function FormView(props){
    const {title,submitLabel,fields,onSubmit}=props;
    const input=useRef(structuredClone(props.data)||{}).current;
    return (
        <form className={`${css.formview} ${props.className||""}`}>
            {title&&<h1 className={css.title}>{title}</h1>}
            <fieldset className={css.fields}>
                {fields?.map(field=>{
                    const id=field.id||field.label;
                    return (
                        <InputField 
                            key={field.label}
                            value={input[id]} {...field} 
                            onChange={(value)=>{input[id]=value}}
                        />
                    )
                })}
            </fieldset>
            <ButtonView 
                className={css.submitbtn} 
                type="submit"
                label={submitLabel}
                onClick={onSubmit&&(()=>{onSubmit(input)})}
            />
            {props.children}
        </form>
    )
}

FormView.defaultProps={
    data:{},
    submitLabel:"submit",
}
