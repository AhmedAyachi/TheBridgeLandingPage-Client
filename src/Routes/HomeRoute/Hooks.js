import {useState,useEffect} from "react";
import * as localdb from "LocalDB";


export const useCourses=()=>{
    const [courses,setCourses]=useState();
    useEffect(()=>{
        fetchCourses().then(setCourses);
    },[]);
    return courses;
};
const fetchCourses=()=>new Promise(resolve=>{
    if(process.env.NODE_ENV==="development"){
        setTimeout(()=>{
            resolve(localdb.courses);
        },300);
    }
    else{
        resolve([]);
    }
});
