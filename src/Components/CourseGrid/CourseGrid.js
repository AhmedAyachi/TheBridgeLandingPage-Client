import React from "react";
import css from "./CourseGrid.module.css";
import CourseView from "./CourseView/CourseView";
import {ButtonView} from "Components";


export default function CourseGrid(props){
    const {title,hasMore,courses}=props;
    return (
        <div className={`${css.coursegrid} ${props.className||""}`}>
            {(title||hasMore)&&(
                <div className={css.header}>
                    <h3 className={css.title}>{title||""}</h3>
                    {hasMore&&<ButtonView label="view more"/>}
                </div>
            )}
            <div className={css.courses}>
                {courses.map(course=><CourseView key={course.name} course={course}/>)}
            </div>
        </div>
    )
}
