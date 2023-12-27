import React from "react";
import css from "./CourseView.module.css";


export default function CourseView(props){
    const {course}=props;
    return (
        <div className={css.courseview}>
            <img 
                className={css.poster} 
                title={course.name+" course"} 
                alt={course.name+" poster"}
                src={course.poster}
            />
            <h3 className={css.name}>{course.name||""}</h3>
            <h6 className={css.price}>{course.price} DT/ Month</h6>
        </div>
    )
}
