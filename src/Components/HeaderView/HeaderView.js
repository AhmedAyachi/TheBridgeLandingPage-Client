import React from "react";
import css from "./HeaderView.module.css";
import {appicon0} from "Assets";


export default function HeaderView(props){
    const {}=props;
    return (
        <header className={`${css.headerview} ${props.className||""}`}>
            <img className={css.appicon} src={appicon0}/>
        </header>
    )
}
