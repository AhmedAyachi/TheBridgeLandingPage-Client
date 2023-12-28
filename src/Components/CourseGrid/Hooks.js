import {sendRequest,Course} from "Resources";


export const sendNewCourseRequest=(course)=>new Promise(resolve=>{
    if(process.env.REACT_APP_LOCALDB){
        setTimeout(()=>{
            resolve({...course,id:Math.random().toString(36).slice(2)});
        },500);
    }
    else{
        resolve(sendRequest("course",{
            method:"POST",
            body:{...course},
        }).
        then(data=>new Course(data.course)));
    }
});
