import React, { Component } from "react";

import helpers from "../../utils/helpers.js";

import {
  Panel,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

import "./style.css";

class AccountPanel extends Component {
  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      loading: true,
      loadingAccount: true,
      user: {
        name: null,
        email: null,
        phone: null,
        role: null
      }
    };
    this.formSubmit = this.formSubmit.bind(this);
    //console.log("*******",this.state);
  }

  componentDidMount() {
    const t = this;

    helpers.getAccountData(t);
    setTimeout(function() {
    }, 2000);
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    const test = re.test(email);
    if (!test) {
      return "error";
    }
    return true;
  }

  preventDefault = e => {
    e.preventDefault();
  };

  formSubmit = e => {
    // console.log(
    //   document.querySelector("#name").value,
    //   document.querySelector("#favorite").value
    // )

    let userProps = this.state.user;

    const email = document.querySelector("#email").value.trim();
    if (this.validateEmail(email)) userProps.email = email;

    const name = document.querySelector("#name").value.trim();
    if (name && name.length > 0) userProps.name = name;

    const phoneNumber = document.querySelector("#phone").value.trim();
    if (phoneNumber && phoneNumber.length > 0) userProps.phone = phoneNumber;

    const role = document.querySelector("#role").value.trim();
    if (role && role.length > 0) userProps.role = role;

    this.setState({
      user: userProps
    });
    // console.log(this.state.user);
    helpers.updateAccountData(this);
  };
  render() {
    // console.log('STATE:')
    if (this.state.loading) {
      return "LOADING...";
    } else {
      // console.log("location", this.state.location)
      return (
        <div>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Account</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <form
                onSubmit={this.preventDefault}
                ref={el => (this.updateUser = el)}
              >
                <FormGroup>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    defaultValue={
                      this.state.user.email ? this.state.user.email : ""
                    }
                    id="email"
                    type="text"
                    name="email"
                    placeholder="isaacnewton@gravity.com"
                  />
                  <ControlLabel>name</ControlLabel>
                  <FormControl
                    id="name"
                    defaultValue={
                      this.state.user.name ? this.state.user.name : ""
                    }
                    type="text"
                    name="name"
                    placeholder="Isaac Newton"
                  />
                  <ControlLabel>phone</ControlLabel>
                  <FormControl
                    defaultValue={
                      this.state.user.phone ? this.state.user.phone : ""
                    }
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="9898989898"
                  />
                  <ControlLabel>role</ControlLabel>
                  <FormControl
                       defaultValue={
                        this.state.user.role ? this.state.user.role : ""
                      }
                      id="role"
                      type="text"
                      name="role"
                      placeholder="Physicist Coder"
                  />
                </FormGroup>
                <hr />
                <Button
                  className="submitBtn"
                  type="button"
                  onClick={this.formSubmit}
                >
                  Submit
                </Button>
              </form>
            </Panel.Body>
          </Panel>
        </div>
      );
    }
  }
}
export default AccountPanel;