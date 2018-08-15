import React, { Component } from "react";
import axios from 'axios';
import "./loginPage.css";

class SignUpPage extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      axios.post("/api/user/signup", this.state)
        .then(res => {
          console.log(res)
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          });
          this.props.history.push('/login')
        }).catch(err => {
          console.log(err)
        })
    }


  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      < div className="content signinContent" >
        <p className="introduction">
          Please Enter Your Info To Sign Up {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input className="input"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <div></div>
          <input className="input"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <div></div>
          <input className="input"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <div></div>
          <input className="input"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <div></div>
          <button className="signinButton" onClick={this.handleFormSubmit}>Sign Up</button>
        </form>
      </div >
    );
  }
}

export default SignUpPage;
