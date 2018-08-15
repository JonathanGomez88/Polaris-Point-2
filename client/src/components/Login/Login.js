import React, {
  Component
} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import axios from 'axios';


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

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email) {
      alert("Input your Email please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.email}`
      );
    }
    // axios.get route to find user by email
    axios.get(`/api/user/${this.state.email}`)
      .then(res => {
        console.log(res)
        this.props.grabUserInfo(res.data[0])
        this.setState({
          email: "",
          password: ""
        });

      })
      .catch(err => {
        console.log(err)
      })

  };



  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="content signinContent">
        <p className="introduction"> Please Log In! If you dont have a Login Please Sign Up</p>
        <form className="form" >
          <input className="input" value={this.state.email} name="email" onChange={this.handleInputChange}
            type="email"
            placeholder="email" />
          <div>
          </div>
          <input className="input"
            value={
              this.state.password
            }
            name="password"
            onChange={
              this.handleInputChange
            }
            type="password"
            placeholder="Password" />
          <div>
          </div>


          <button className="signinButton" onClick={this.handleFormSubmit}>
            <Link to="/">
              Log In
          </Link>
          </button>

        </form>
      </div>
    );
  }
}

export default login;