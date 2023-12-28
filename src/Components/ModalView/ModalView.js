import React,{useEffect,useRef,useState} from "react";
import css from "./ModalView.module.css";
import {cross0} from "Assets";
import {fadeIn,fadeOut} from "vritra";


export default function ModalView(props){
    const {visible,closable,onClose}=props;
    const [shown,setShown]=useState(visible);
    const [mounted,setMounted]=useState(shown);
    const ref=useRef();
    useEffect(()=>{
        if(visible){setShown(true);setMounted(true)}
        else{setShown(false)};
    },[visible]);
    useEffect(()=>{
        (!shown)&&fadeOut(ref.current,200,()=>{
            setMounted(false);
            onClose&&onClose();
        });
    },[shown]);
    return <>
        {mounted&&
            <div className={css.modalview} ref={(element)=>{ref.current=fadeIn(element)}}>
                {closable&&<img 
                    className={`button ${css.closebtn}`}
                    alt="close" src={cross0(majorColor)}
                    onClick={()=>{setShown(false)}}
                />}
                {props.children}
            </div>
        }
    </>
}

ModalView.defaultProps={
    visible:true,
    closable:true,
}
