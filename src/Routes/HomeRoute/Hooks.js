import {useState,useEffect} from "react";
import {Course,sendRequest} from "Resources";
import * as localdb from "LocalDB";


export const useCourses=()=>{
    const [courses,setCourses]=useState();
    useEffect(()=>{
        fetchCourses().then(setCourses);
    },[]);
    return courses;
};
const fetchCourses=()=>new Promise(resolve=>{
    if(process.env.REACT_APP_LOCALDB){
        setTimeout(()=>{
            resolve(localdb.courses);
        },300);
    }
    else{
        resolve(sendRequest("courses").then(data=>data?.map($=>new Course($))));
    }
});
