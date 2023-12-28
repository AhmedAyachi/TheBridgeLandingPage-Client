import React from "react";
import css from "./HomeRoute.module.css";
import {LoadingView,FormView,CourseGrid,ButtonView,HeaderView} from "Components";
import {workspace0} from "Assets";
import {useSelector} from "react-redux";
import {removeItem} from "vritra";
import * as H from "./Hooks";


export default function HomeRoute(){
    const courses=H.useCourses();
    const isAdmin=useSelector(store=>store.isAdmin);
    return (
        <div className={css.homeroute}>
            <LoadingView visible={!courses}/>
            <HeaderView className={css.header}/>
            <main>
                {(!isAdmin)&&<div className={css.row0} style={styles.row0}>
                    <div className={css.facade}>
                        <div/>
                        {[
                            "improve your skills on your own",
                            "to prepare for a better future",
                        ].map(text=><span key={text}>{text}</span>)}
                        <ButtonView label="register now"/>
                    </div>
                </div>}
                <div className={css.row1}>
                    {courses&&<CourseGrid 
                        courses={courses}
                        title={isAdmin?"available courses":"discover our courses"}
                        hasMore={!isAdmin}
                        editable={isAdmin}
                    />}
                    {(!isAdmin)&&<FormView
                        title="contact us"
                        className={css.contactform}
                        fields={statics.contactFields}
                        submitLabel="send the message"
                    />}
                </div>
            </main>
        </div>
    )
}

const statics={
    contactFields:[
        {label:"name",placeholder:"jiana martina"},
        {
            label:"email",
            type:"email",
            placeholder:"hello@reallygreatsite.com",
        },
        {
            label:"message",
            placeholder:"Write your message here",
            multiline:true,
        },
    ],
},styles={
    row0:{
        backgroundImage:`url(${workspace0})`,
    },
}
