import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import PracticionerForm from "../components/Forms/PracticionerForm";
import Jumbotron from "../components/Panels/Jumbotron";

class PracticionersAdd extends Component {
  render() {
    return (
      <Wrapper>
         <NavBar />
      <Jumbotron title="Add Practicioner"></Jumbotron>
      <PracticionerForm />
      <Footer />
      </Wrapper>
    );
  }
}
  
  export default PracticionersAdd;