import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import PatientForm from "../components/Forms/PatientForm";
import Jumbotron from "../components/Panels/Jumbotron";

class PatientsAdd extends Component {
    render() {
      return (
        <Wrapper>
           <NavBar />
        <Jumbotron title="Add Patient"></Jumbotron>
        <PatientForm />
        <Footer />
        </Wrapper>
      );
    }
  }


  
  export default PatientsAdd;


