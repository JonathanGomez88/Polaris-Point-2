import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import axios from 'axios';
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Accounts from "./components/pages/Accounts";
import Contact from "./components/pages/Contact";
import Form from './components/SignUp/LoginPage';
import Login from './components/Login/Login';
class App extends React.Component {
    state = {
        user: this.state
    }
     handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.email) {
          alert("Input your Email please!");
        } else if (this.state.password.length < 6) {
          alert(
            `Choose a more secure password ${this.state.email}`
          );
        } else {
          alert(`Hello ${this.state.email}`);
        }
         // axios.get route to find user by email
        axios.get(`/api/user/${this.state.email}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({
          email: "",
          password: ""
        });
      };
     render() {
       return (<div>
    
        <NavTabs/>
        <Switch>
            <Route path="/login" render={() => <Login handleSubmit={this.handleFormSubmit}/>}/>
            <Route path="/SignUp" component={Form}/>
            <Route exact path = "/" component = {Home}/> 
            <Route exact path = "/about" component = {About}/> 
            <Route exact path = "/accounts" component = {Accounts}/> 
            <Route path = "/contact" component = {Contact}/> 
        </Switch>
    </div >) 
    }
} 
export default App; 