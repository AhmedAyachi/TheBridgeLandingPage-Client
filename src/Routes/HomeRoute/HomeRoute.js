import React from "react";
import css from "./HomeRoute.module.css";
import {ContactForm,CourseGrid,ButtonView,HeaderView} from "Components";
import {workspace0} from "Assets";
import * as H from "./Hooks";


export default function HomeRoute(){
    const courses=H.useCourses();
    return (
        <div className={css.homeroute}>
            <HeaderView className={css.header}/>
            <main>
                <div className={css.row0} style={styles.row0}>
                    <div className={css.facade}>
                        <div/>
                        {[
                            "improve your skills on your own",
                            "to prepare for a better future",
                        ].map(text=><span key={text}>{text}</span>)}
                        <ButtonView label="register now"/>
                    </div>
                </div>
                <div className={css.row1}>
                    {courses&&<CourseGrid 
                        courses={courses}
                        title="discover our courses"
                        hasMore={true}
                    />}
                    <ContactForm
                        className={css.contactform}
                        fields={statics.contactFields}
                    />
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
