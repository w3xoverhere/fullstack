import React from "react";
import s from './../../static/css/Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={s.logoBlock}>
                <img className={s.logo} src="./../../static/img/logo.png" alt="-"/>
            </div>
        </div>
    )
}

export default Header;