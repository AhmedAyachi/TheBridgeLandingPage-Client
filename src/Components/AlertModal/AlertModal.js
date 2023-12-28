import React, { useEffect, useState } from "react";
import css from "./AlertModal.module.css";
import {ButtonView,ModalView} from "Components";
import {check0,cross0} from "Assets";


export default function AlertModal(props){
    const {message,visible,onConfirm,onClose}=props;
    const [shown,setShown]=useState(visible);
    useEffect(()=>{
        setShown(visible);
    },[visible]);
    return (
        <ModalView visible={shown} closable={false} onClose={onClose}>
            <div className={css.alertmodal}>
                {message&&<p className={css.message}>{message}</p>}
                <div className={css.actions}>
                    {[
                        {label:"confirm",icon:check0,color:mainColor},
                        {label:"cancel",icon:cross0,color:majorColor}
                    ].map(({label,icon,color},i)=>(
                        <ButtonView 
                            key={label} label={label}
                            icon={icon(backgroundColor)}
                            style={{backgroundColor:color}}
                            onClick={()=>{
                                (!i)&&onConfirm&&onConfirm();
                                setShown(false);
                            }}
                        />
                    ))}
                </div>
            </div>
        </ModalView>
    )
}
