import {configureStore} from "@reduxjs/toolkit";
import * as S from "./Slices";

export const store=configureStore({
    reducer:S.DefaultSlice.reducer,
    /* middleware:getDefaultMiddleware({
        serializableCheck:false,
    }), */
    devTools:true,
});
