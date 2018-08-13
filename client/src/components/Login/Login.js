import React, { Component } from "react";

class login extends Component {
  // Setting the component's initial state
  state = {
    email:"",
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
    if (!this.state.email) {
      alert("Input your Email please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.email}`
      );
    } else {
      alert(`Hello ${this.state.email}`);
    }

    // A route doing a get to the database to find a user with matching username and password
    
        // If there's an error, log the error
     
// localStorage.setItem("user", username)
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Please Log In! If you dont have a Login Please Sign Up {this.state.email}
        </p>
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Log In</button>
        </form>
      </div>
    );
  }



}

export default login;
