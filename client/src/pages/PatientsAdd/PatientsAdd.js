import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import PatientsFormInput from "../../components/PatientsFormInput/PatientsFormInput";
import SubmitPatientsBtn from  "../../components/SubmitPatientsBtn/SubmitPatientsBtn";


class PatientsAdd extends Component {
    state = {
      item: [
        {id: "Name", val:""},
        {id: "Age", val:""},
        {id: "Weight", val: ""},
        {id: "Height", val:""},
        {id: "Temperature", val:""},
        {id: "Pulse", val: ""},
        {id: "Respiratory Rate", val:""},
        {id: "Pressure", val:""},
        {id: "Symptoms", val: ""},
        {id: "Diagnosis", val:""},
        {id: "Drugs", val:""},
        {id: "Check in Date", val: ""},
        {id: "Check out Date", val: ""},
      ],
    };
  
    render() {
      return (
        <Wrapper>
        <Panel title="Add Patient">
        <PatientsFormInput submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
        </Panel>
        </Wrapper>
      );
    }
  }
  
  export default PatientsAdd;