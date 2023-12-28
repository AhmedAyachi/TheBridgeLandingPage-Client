import React,{useState} from "react";
import css from "./CourseForm.module.css";
import {FormView,LoadingView} from "Components";
import * as H from "./Hooks";


export default function CourseForm(props){
    const {course,onUpdated}=props;
    const [loading,setLoading]=useState(false);
    return (
        <FormView
            {...props} className={css.courseform}
            title={course?.name||"new course"}
            fields={statics.fields}
            data={course}
            onSubmit={course?((input)=>{
                setLoading(true);
                H.sendCourseData(course.id,input).
                then(data=>{
                    console.log(data);
                    Object.assign(course,data);
                    setLoading(false);
                    onUpdated&&onUpdated(course);
                });
            }):props.onSubmit}
        >
            <LoadingView visible={loading}/>
        </FormView>
    )
}

const statics={
    fields:[
        {label:"name"},
        {
            id:"price",
            label:"monthly price",
            type:"number",
        },
    ],
}
