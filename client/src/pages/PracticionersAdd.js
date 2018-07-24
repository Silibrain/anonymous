import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import PracticionerForm from "../components/Forms/PracticionerForm";
import Jumbotron from "../components/Panels/Jumbotron";

class PracticionersAdd extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Jumbotron title="Add Practicioner"></Jumbotron>
          <PracticionerForm />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default PracticionersAdd;