import {createSlice} from "@reduxjs/toolkit";


export default createSlice({
    name:"default",
    initialState:{
        isAdmin:Boolean(localStorage.getItem("isAdmin")),
    },
    /* reducers:{
        
    }, */
});
