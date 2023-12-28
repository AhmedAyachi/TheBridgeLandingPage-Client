

export default class Course {
    constructor(props={}){
        Object.assign(this,{
            id:props.id,
            name:props.name,
            price:props.price,
            poster:process.env.REACT_APP_LOCALDB?props.poster:(process.env.REACT_APP_SERVER_IP+"static/"+props.poster),
        });
    }
}
