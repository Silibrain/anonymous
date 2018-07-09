import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import PatientsFormInput from "../../components/PatientsFormInput/PatientsFormInput";
import SubmitPatientsBtn from  "../../components/SubmitPatientsBtn/SubmitPatientsBtn";
import UserForm from "../../components/UserForm/UserForm";

import PatientsView from "../pages/PatientsView.js";

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
      results:[],
      show: false,
      error:""
    };

    handleInputChange = ( event, id ) => {
      const patientIndex = this.state.patients.findIndex(patient => patient.id === id);
      const patient = { ...this.state.patients[patientIndex] };
      patient.val = event.target.value;
      const patients = [ ...this.state.patients ];
      patients[patientIndex] = patient;
      this.setState({ patients: patients });
    }

    handleFormSubmit = event => {
      event.preventDefault();
      nyt.getArticles(this.state.item[0].val, this.state.item[1].val, this.state.item[2].val, this.state.item[3].val, this.state.item[4].val, this.state.item[5].val, this.state.item[6].val, this.state.item[7].val, this.state.item[8].val, this.state.item[9].val, this.state.item[10].val, this.state.item[11].val, this.state.item[12].val).then(res => {
        this.setState({
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
          results: res.data.response.docs,
          showResults: true
        });
      })
      .catch(err => this.setState({ error: err.message}));
    }

    handlePatientSaved = (event, id) => {
      event.preventDefault();
      const patientIndex = this.state.results.findIndex(result => result._id === id);
      const patient = { ...this.state.results[patientIndex]};
      console.log(patient);
      API.savePatient({
        name: patient.name,
        age: patient.age,
        weight: patient.weight,
        height: patient.height,
        temperature: patient.temperature,
        pulse: patient.pulse,
        respiratory: patient.respiratory,
        pressure: patient.pressure,
        symptoms: patient.symptoms,
        diagnosis: patient.diagnosis,
        drugs: patient.drugs,
        inDate: patient.inDate,
        outDate: patient.outDate,
      })
      .then(res => alert('Patient saved!'))
      .catch(err => console.log(err));
    }
  
    render() {
      return (
        <Wrapper>
        <Panel title="Add Patient">
        <UserForm submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
        </Panel>
        <PatientsView></PatientsView>
        </Wrapper>
      );
    }
  }
  
  export default PatientsAdd;