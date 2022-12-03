import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../../static/css/Navigation.module.css"


const Navigation = () => {
    let activeClassName = s.NavActive;
    return (<div>
            <ul className={s.navigationList} style={{height: "100vh",}}>
                <li>
                    <NavLink to="/"
                             className={({isActive}) => isActive ? activeClassName : s.navigationItem}>Main</NavLink>
                </li>
                <li>
                    <NavLink to="/catalog/?page=1"
                             className={({isActive}) => isActive ? activeClassName : s.navigationItem}>Catalog</NavLink>
                </li>
                <li>
                    <NavLink to="/profile/"
                             className={({isActive}) => isActive ? activeClassName : s.navigationItem}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/my-cart/" className={({isActive}) => isActive ? activeClassName : s.navigationItem}>
                        My cart
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings/"
                             className={({isActive}) => isActive ? activeClassName : s.navigationItem}>Settings</NavLink>
                </li>
            </ul>
        </div>)
}

export default Navigation