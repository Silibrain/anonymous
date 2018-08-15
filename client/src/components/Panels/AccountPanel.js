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
        roleandinstitution: null,
        picturelink: null,
        bio: null,
        degreeandalmamater: null
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

    const roleandinstitution = document.querySelector("#roleandinstitution").value.trim();
    if (roleandinstitution && roleandinstitution.length > 0) userProps.roleandinstitution = roleandinstitution;

    const picturelink = document.querySelector("#picturelink").value.trim();
    if (picturelink && picturelink.length > 0) userProps.picturelink = picturelink;

    const degreeandalmamater = document.querySelector("#degreeandalmamater").value.trim();
    if (degreeandalmamater && degreeandalmamater.length > 0) userProps.degreeandalmamater = degreeandalmamater;

    const bio = document.querySelector("#bio").value.trim();
    if (bio && bio.length > 0) userProps.bio = bio;

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
              <Panel.Title componentClass="h3">Update Account Information</Panel.Title>
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
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    id="name"
                    defaultValue={
                      this.state.user.name ? this.state.user.name : ""
                    }
                    type="text"
                    name="name"
                    placeholder="Isaac Newton"
                  />
                  <ControlLabel>Phone</ControlLabel>
                  <FormControl
                    defaultValue={
                      this.state.user.phone ? this.state.user.phone : ""
                    }
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="9898989898"
                  />
                  <ControlLabel>Role and Institution</ControlLabel>
                  <FormControl
                       defaultValue={
                        this.state.user.roleandinstitution ? this.state.user.roleandinstitution : ""
                      }
                      id="roleandinstitution"
                      type="text"
                      name="roleandinstitution"
                      placeholder="Coder @Cambridge"
                  />
                <ControlLabel>Picture Link</ControlLabel>
                  <FormControl
                       defaultValue={
                        this.state.user.picturelink ? this.state.user.picturelink : ""
                      }
                      id="picturelink"
                      type="text"
                      name="picturelink"
                      placeholder="https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg"
                  />
                <ControlLabel>Biography</ControlLabel>
                  <FormControl
                       defaultValue={
                        this.state.user.bio ? this.state.user.bio : ""
                      }
                      id="bio"
                      type="text"
                      name="bio"
                      placeholder="First to describe gravity, now coding it..."
                  />
                <ControlLabel>Degree and Alma Mater</ControlLabel>
                  <FormControl
                       defaultValue={
                        this.state.user.degreeandalmamater ? this.state.user.degreeandalmamater : ""
                      }
                      id="degreeandalmamater"
                      type="text"
                      name="degreeandalmamater"
                      placeholder="PhD in Physics @ Cambridge"
                  />
                </FormGroup>
                <hr />
                <Button
                  className="btn btn-info"
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