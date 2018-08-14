import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Accounts from "./components/pages/Accounts";
import Contact from "./components/pages/Contact";
import Login from './components/Login/Login';
import SignUpPage from "./components/SignUp/SignUpPage";
import NavSignedIn from "./components/NavSignedIn";
import NavSignedOut from "./components/NavSignedOut";


class App extends React.Component {
    state = {
        user: {},
        auth: false
    }


    grabUserInfo = (user) => {
        this.setState({
            user: user,
            auth: true
        })
    }

    logOutUser = () => {
        this.setState({
            user: {},
            auth: false
        })
    }


     render() {
       return (
        <div>
    
            {console.log(this.state.auth)}
            {this.state.auth ? <NavSignedIn logOutUser={this.logOutUser}/> : <NavSignedOut/>}
            <Switch>
                <Route path="/login" render={() => <Login grabUserInfo={this.grabUserInfo}/>}/>
                <Route path="/SignUp" component={SignUpPage}/>
                <Route exact path = "/" render={() => <Home user={this.state.user}/>}/> 
                <Route exact path = "/about" component = {About}/> 
                <Route exact path = "/accounts" component = {Accounts}/> 
                <Route path = "/contact" component = {Contact}/> 
            </Switch>
        </div >
    ) 
    }
} 
export default App; 