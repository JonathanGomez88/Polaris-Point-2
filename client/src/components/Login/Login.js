import React, { Component } from "react";
import "./login.css"

class login extends Component {
  // Setting the component's initial state
  state = {
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

  

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="content">
        <p className="introduction">
          Please Log In! If you dont have a Login Please Sign Up {this.state.email}
        </p>
        <form className="form">
          <input className="input"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="email"
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
          <button className="submitButton" onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default login;
