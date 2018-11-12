import React, { Component } from "react";
import classNames from "classnames";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import LoginForm from "../components/Forms/LoginForm";
import { Jumbotron } from "../components/Panels";
// import Styles from "./style.css";
// import medimg from "client/public/images/medimg.jpg";

class LogIn extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Wrapper>
          <Jumbotron />
          <div id="hero" align="center">
            <div className="content">
              <div className="title">MD Anonymous</div>
              <span />{" "}
              <div className="container">
                <LoginForm />
              </div>
            </div>
            <div id="aboutApp" align="center" />
          </div>
        </Wrapper>
        <br />
        <Footer />
      </div>
    );
  }
}

export default LogIn;
