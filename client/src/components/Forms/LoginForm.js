import React, { Component } from "react";
import { LoginBtn, LoginSubmit } from "../Buttons";
import "./style.css";

class LoginForm extends Component {
  state = {
    type: "",
    email: "",
    password: "",
    confirm: ""
  };

  changeState = newState => {
    this.setState({
      type: newState
    });
  };

 
  handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case "password":
        if (value === this.state.confirm && value !== "") {
          this.setState({
            [name]: value
          });
        } else {
          this.setState({
            [name]: value
          });
        }
        break;
      case "confirm":
        if (value === this.state.password && value !== "") {
          this.setState({
            [name]: value
          });
        } else {
          this.setState({
            [name]: value
          });
        }
        break;
      default:
        this.setState({
          [name]: value
        });
    }
  };

  goBack = () => {
    this.setState({
      type: ""
    });
  };

  passMatch = () => {
    if (this.state.match) {
      return <i className="fa fa-check" />;
    }
  };

  render() {

    let confirm = null;
    if (this.state.type === "signup") {
      confirm = (
        <div className="form-group">
          <label htmlFor="Confirm">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="Confirm"
            name="confirm"
            placeholder="confirm password"
            value={this.state.confirm}
            onChange={this.handleInputChange}
          />
        </div>
      );
    }
    if (this.state.type !== "") {
      return (
        <form method="POST"  className="clearfix">
          <div className="form-group">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          {confirm}
          <button className="btn btns" onClick={this.goBack}>
            Go Back
          </button>
          <LoginSubmit type={this.state.type} />
        </form>
      );
    } else {
      return (
        <form className="home-btn-wrap">
          <LoginBtn type="login" onClick={() => this.changeState("login")} />
          <LoginBtn type="signup" onClick={() => this.changeState("signup")} />
        </form>
      );
    }
  }
}

export default LoginForm;
