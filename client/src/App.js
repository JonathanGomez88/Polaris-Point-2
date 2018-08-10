import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Accounts from "./components/pages/Accounts";
import Contact from "./components/pages/Contact";

const App = () => ( 
    <
    div >
    <
    NavTabs / >
    <Switch>
    <
    Route exact path = "/"
    component = {
        Home
    }
    /> <
    Route exact path = "/about"
    component = {
        About
    }
    /> <
    Route exact path = "/accounts"
    component = {
        Accounts
    }
    /> <
    Route path = "/contact"
    component = {
        Contact
    }
    /> 
    </Switch>
    < /
    div > 
);

export default App;