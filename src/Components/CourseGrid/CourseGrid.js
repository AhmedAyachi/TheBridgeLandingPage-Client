import React,{useState} from "react";
import css from "./CourseGrid.module.css";
import CourseView from "./CourseView/CourseView";
import {ModalView,CourseForm,ButtonView} from "Components";
import {removeItem} from "vritra";
import * as H from "./Hooks";


export default function CourseGrid(props){
    const {title,hasMore,editable,onDeleteCourse}=props;
    const [courses,setCourses]=useState(props.courses);
    const [adding,setAdding]=useState(false);
    return (
        <div className={`${css.coursegrid} ${props.className||""}`}>
            {(title||hasMore)&&(
                <div className={css.header}>
                    <h3 className={css.title}>{title||""}</h3>
                    {(hasMore||editable)&&<ButtonView 
                        label={editable?"new course":"view more"}
                        onClick={editable&&(()=>{setAdding(true)})}
                    />}
                </div>
            )}
            <div className={css.courses}>
                {courses.map(course=><CourseView 
                    key={course.name} 
                    course={course}
                    editable={editable}
                    onDeleted={()=>{
                        removeItem(courses,course);
                        setCourses([...courses]);
                    }}
                />)}
            </div>
            {adding&&
                <ModalView onClose={()=>{setAdding(false)}}>
                    <CourseForm
                        onSubmit={(input)=>{
                            H.sendNewCourseRequest(input).then(course=>{
                                setAdding(false);
                                setCourses([course,...courses]);
                            });
                        }}
                    />
                </ModalView>
            }
        </div>
    )
}
