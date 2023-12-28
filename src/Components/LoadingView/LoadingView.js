import React, {useState,useEffect,useRef} from "react";
import css from "./LoadingView.module.css";
import {fadeIn,fadeOut} from "vritra";
import {loading0} from "Assets";


export default function LoadingView(props){
    const {visible,onHidden}=props;
    const [mounted,setMounted]=useState(visible);
    const ref=useRef();
    useEffect(()=>{
        if(visible){setMounted(true)}
        else{
            fadeOut(ref.current,()=>{
                setMounted(false);
                onHidden&&onHidden();
            });
        }
    },[visible]);
    return <>
        {mounted&&
            <div ref={ref} className={`${css.loadingview} ${props.className||""}`}>
                <img className={css.loader} alt="loading..." src={loading0}/>
            </div>
        }
    </>
}
