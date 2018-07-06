import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import PatientsFormInput from "../../components/PatientsFormInput/PatientsFormInput";
import PatientDeleteBtn from "../../components/PatientDeleteBtn/PatientDeleteBtn";
import PatientUpdateBtn from  "../../components/PatientUpdateBtn/PatientUpdateBtn";


class PatientsDetail extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <PatientsFormInput></PatientsFormInput>
        <PatientDeleteBtn></PatientDeleteBtn>
        <PatientUpdateBtn></PatientUpdateBtn>
        </Wrapper>
      );
    }
  }
  
  export default PatientsDetail;
  