import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import LogInBtn from "../../components/LogInBtn/LogInBtn";
import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";

class Home extends Component {
  
    render() {
      return (
        <Wrapper>
          <NavBar></NavBar>
          <Jumbotron></Jumbotron>
          <LogInBtn></LogInBtn>
          <SignUpBtn></SignUpBtn>
        </Wrapper>
      );
    }
  }
  
  export default Home;
  