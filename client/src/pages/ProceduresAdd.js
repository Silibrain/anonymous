import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import ProcedureForm from "../components/Forms/ProcedureForm";
import Jumbotron from "../components/Panels/Jumbotron";

class ProceduresAdd extends Component {
  
  render() {
    return (
      <Wrapper>
         <NavBar />
      <Jumbotron title="Add Procedure"></Jumbotron>
      <ProcedureForm />
      <Footer />
      </Wrapper>
    );
  }
}
  
  export default ProceduresAdd;
  