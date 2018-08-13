import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Accounts from "./components/pages/Accounts";
import Contact from "./components/pages/Contact";
import Form from './components/SignUp/LoginPage';
import login from './components/Login/Login';

const App = () => ( 
    <div>
    <
    NavTabs/>
    <Switch>
    <Route path="/login" component={login}/>
    <Route path="/SignUp" component={Form}/>
    <Route exact path = "/" component = {Home}/> 
    <Route exact path = "/about" component = {About}/> 
    <Route exact path = "/accounts" component = {Accounts}/> 
    <Route path = "/contact" component = {Contact}/> 
    </Switch>
    </div > 
);

export default App;