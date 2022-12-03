import React, {useState} from "react";
import Header from "../UI/Header";
import Navigation from "../UI/Navigation";
import {Outlet} from "react-router-dom";
import './../../static/css/style.css'


const App = () => {
    return (
        <div className="wrapper">
            <div className="navbar-wrapper">
                <Header/>
            </div>
            <div className="navigation">
                <Navigation/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}


export default App;
