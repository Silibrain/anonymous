import React, { Component } from "react";
import Jumbotron from "../components/Panels/Jumbotron";
import Wrapper from "../components/Panels/Wrapper";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper className="container">
          <br />
          <br />
          <div id="hero2" align="center">
            <div className="content">
              <Jumbotron
                title="Hippocrates"
                lead="for professionals to collaborate and keep track of their information while keeping their patients’ identity hidden."
              />
            </div>
            <div className="container" align="center">
              <img src="./logo.png" alt="" width="150px" />
            </div>
          </div>
          <br />
          <br />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Home;
