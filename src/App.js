import React from "react";
import css from "./App.module.css";
import {Route,Routes} from "react-router-dom";
import {HomeRoute} from "Routes";


export default function App(){
    return (
        <div className={css.app}>
            <Routes>
                <Route path="/" element={<HomeRoute/>}/>
            </Routes>
        </div>
    );
}
