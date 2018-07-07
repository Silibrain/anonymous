import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import LogInBtn from "../../components/LogInBtn/LogInBtn";
import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <LogInBtn />
        <SignUpBtn />
      </Wrapper>
    );
  }
}

export default Home;
