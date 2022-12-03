import React from "react";
import s from './../../static/css/Main.module.css'

const MainRoute = (props) => {
    return (
        <div className={s.mainWrapper}>
            <img className={s.mainLogo} src="./../../static/img/logo.png" alt='-'/>
            <p className={s.mainParagraph}>
                This web application is written by one person(w3x). Exclusively for my own learning.
                Using frameworks such as React js, Django, DRF and PostgreSQL database.
                Have a good day :).
            </p>
        </div>
    )
}

export default MainRoute