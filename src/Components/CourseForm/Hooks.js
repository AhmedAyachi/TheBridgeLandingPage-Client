import {Course,sendRequest} from "Resources";


export const sendCourseData=(courseId,data)=>new Promise(resolve=>{
    if(process.env.REACT_APP_LOCALDB){
        setTimeout(()=>{
            resolve(data);
        },1000);
    }
    else{
        resolve(sendRequest("course",{
            method:"PUT",
            body:{...data,id:courseId},
        }).
        then(data=>{
            const {course}=data;
            return course&&new Course(course);
        }));
    }
});
