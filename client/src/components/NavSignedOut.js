import React from "react";
import {
    Link
} from "react-router-dom";
import "./nav.css"

const NavSignedOut = () => {
    return (
    <ul className="nav nav-tabs" >
    
        <li className="nav-item"><Link to="/SignUp"
            className={
                window.location.pathname === "/SignUp" ? "nav-link active" : "nav-link"}
        >Sign Up</Link></li>
        <li className="nav-item"><Link to="/login"
            className={
                window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >Login</Link></li>
        
   
        <li className="nav-item" >
            <Link to="/" className={
                window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }>Home </Link>
        </li >
        <li className="nav-item" >
            <Link to="/about" className={
                window.location.pathname === "/about" ? "nav-link active" : "nav-link"
            }>About </Link>
        </li> <li className="nav-item" >
            <Link to="/Accounts"
                className={
                    window.location.pathname === "/Accounts" ? "nav-link active" : "nav-link"
                } >Accounts </Link>
        </li>
        <li className="nav-item" >
            <Link to="/contact"
                className={
                    window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                } >
                Contact </Link> </li>
        {/* <li className="nav-item" >
            <Link to="/learn"
                className={
                    window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
                } >
                Learn </Link>
        </li> */}
    
    </ul>
    )
};

export default NavSignedOut;