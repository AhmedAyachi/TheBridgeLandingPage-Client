

export default function(endpoint,options){
    const {method="GET",body}=options||{};
    return fetch(process.env.REACT_APP_SERVER_IP+endpoint,{
        headers:{
            "Content-Type":"application/json",
        },
        method,
        body:body&&JSON.stringify(body),
    }).
    then(response=>response.json()).
    then(data=>{
        const {error}=data;
        if(error) return Promise.reject(error);
        else return data;
    }).
    catch(error=>{
        console.error(error);
        return Promise.reject(error);
    });
}
