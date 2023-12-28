import React from "react";
import css from "./HeaderView.module.css";
import {useSelector} from "react-redux";
import {edit0,appicon0} from "Assets";


export default function HeaderView(props){
    const {}=props,isAdmin=useSelector(store=>store.isAdmin);
    return (
        <header className={`${css.headerview} ${props.className||""}`}>
            <img className={css.appicon} src={appicon0}/>
            <button 
                className={css.editbtn}
                onClick={()=>{
                    localStorage.setItem("isAdmin",isAdmin?"":"true");
                    location.reload();
                }}
            >
                <img title="toggle admin mode" src={edit0(isAdmin?mainColor:textColor)}/>
            </button>
        </header>
    )
}
