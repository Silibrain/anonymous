import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import LoginForm from "../components/Forms/LoginForm";

class LogIn extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <div id="hero" align="center">
            <div className="content">
              <img src="./logo.png" alt="" width="175px"/>
            </div>
            <div className="container">
              <LoginForm />
            </div>
          </div>
          <div id="aboutApp" align="center" />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default LogIn;
