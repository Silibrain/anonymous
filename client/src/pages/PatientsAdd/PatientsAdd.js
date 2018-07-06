import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from  "../../components/NavBar/NavBar";
import PatientsFormInput from "../../components/PatientsFormInput/PatientsFormInput";
import SubmitPatientsBtn from  "../../components/SubmitPatientsBtn/SubmitPatientsBtn";


class PatientsAdd extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <PatientsFormInput></PatientsFormInput>
        <SubmitPatientsBtn></SubmitPatientsBtn>

        </Wrapper>
      );
    }
  }
  
  export default PatientsAdd;