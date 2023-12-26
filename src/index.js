import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"; 
import {store} from "./Store";


!function globalizeCssVars(){
    const {innerWidth}=window;
    Object.defineProperty(window,"rem",{
        value:innerWidth/(innerWidth>567?300:100),
    });
    const style=getComputedStyle(document.documentElement);
    [
        "mainFont","majorFont","minorFont",
        "mainColor","majorColor","minorColor",
        "textColor","backgroundColor",
    ].forEach(name=>{
        Object.defineProperty(window,name,{
            value:style.getPropertyValue(`--${name}`),
        });
    });
}();
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    /* </React.StrictMode>  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
