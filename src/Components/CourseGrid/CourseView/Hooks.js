import {sendRequest} from "Resources";


export const sendDeleteRequest=(course)=>new Promise(resolve=>{
    if(process.env.REACT_APP_LOCALDB){
        setTimeout(()=>{
            resolve(true);
        },500);
    }
    else{
        resolve(sendRequest("course",{
            method:"Delete",
            body:{id:course.id}
        }).
        then(data=>data.deleted));
    }
});
