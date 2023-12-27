import React from "react";
import css from "./ContactForm.module.css";
import TextField from "./TextField/TextField";
import {ButtonView} from "Components";


export default function ContactForm(props){
    const {fields}=props;
    return (
        <form className={`${css.contactform} ${props.className||""}`}>
            <h1 className={css.title}>contact us</h1>
            <fieldset className={css.fields}>
                {fields?.map(field=>(
                    <TextField {...field} key={field.label}/>
                ))}
            </fieldset>
            <ButtonView 
                className={css.submitbtn} 
                type="submit"
                label="send the message"
            />
        </form>
    )
}
