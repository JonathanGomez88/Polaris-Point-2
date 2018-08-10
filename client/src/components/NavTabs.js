import React from "react";
import {
    Link
} from "react-router-dom";

const NavTabs = () => ( <
    ul className = "nav nav-tabs" >
    <
    li className = "nav-item" >
    <
    Link to = "/"
    className = {
        window.location.pathname === "/" ? "nav-link active" : "nav-link"
    } >
    Home <
    /Link> < /
    li > <
    li className = "nav-item" >
    <
    Link to = "/about"
    className = {
        window.location.pathname === "/about" ? "nav-link active" : "nav-link"
    } >
    About <
    /Link> < /
    li > <
    li className = "nav-item" >
    <
    Link to = "/Accounts"
    className = {
        window.location.pathname === "/accounts" ? "nav-link active" : "nav-link"
    } >
    Accounts <
    /Link> < /
    li > <
    li className = "nav-item" >
    <
    Link to = "/contact"
    className = {
        window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
    } >
    Contact <
    /Link> < /
    li > <
    li className = "nav-item" >
    <
    Link to = "/contact/learn"
    className = {
        window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"
    } >
    Learn <
    /Link> < /
    li > <
    /ul>
);

export default NavTabs;