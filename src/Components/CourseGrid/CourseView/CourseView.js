import React,{useState} from "react";
import css from "./CourseView.module.css";
import {AlertModal,ModalView,CourseForm} from "Components";
import {trash0,pencil0} from "Assets";
import * as H from "./Hooks";


export default function CourseView(props){
    const {course,editable,onDeleted}=props;
    const [mounted,setMounted]=useState(true);
    const [editing,setEditing]=useState(false);
    const [deleting,setDeleting]=useState(false);
    return (mounted&&
        <div className={css.courseview} editable={editable?"":undefined} >
            <img 
                className={css.poster} 
                title={course.name+" course"} 
                alt={course.name+" poster"}
                src={course.poster}
            />
            <h3 className={css.name}>{course.name||""}</h3>
            <h6 className={css.price}>{course.price} DT/ Month</h6>
            {editable&&<>
                <div className={css.actions}>
                    <button className={css.action} onClick={()=>{setEditing(true)}}>
                        <img alt="edit" src={pencil0(majorColor)}/>
                    </button>
                    <button className={css.action} onClick={()=>{setDeleting(true)}}>
                        <img alt="delete" src={trash0(mainColor)}/>
                    </button>
                </div>
                <ModalView 
                    visible={editing}
                    onClose={()=>{setEditing(false)}}
                >
                    <CourseForm 
                        course={course}
                        onUpdated={()=>{setEditing(false)}}
                    />
                </ModalView>
                <AlertModal 
                    message={`delete the ${course.name} course ?`}
                    visible={deleting}
                    onClose={()=>{setDeleting(false)}}
                    onConfirm={()=>{
                        H.sendDeleteRequest(course).then(deleted=>{
                            deleted&&onDeleted&&onDeleted(course);
                        });
                    }}
                />
            </>}
        </div>
    )
}
