import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import UserForm from "../components/Forms/UserForm/UserForm";
import Jumbotron from "../components/Panels/Jumbotron";
import List from "../components/Panels/List/List";

class PatientsAdd extends Component {
    state = {
      labels: [
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
      API.getPatient(this.state.item[0].val, this.state.item[1].val, this.state.item[2].val, this.state.item[3].val, this.state.item[4].val, this.state.item[5].val, this.state.item[6].val, this.state.item[7].val, this.state.item[8].val, this.state.item[9].val, this.state.item[10].val, this.state.item[11].val, this.state.item[12].val).then(res => {
        this.setState({
          labels: [
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
    let patientResults = "Please enter all fields."
    if(this.state.showResults){
      patientResults = this.state.results.map((patient, index) =>{
        return <List key={patient._id} name={patient.name} age={patient.age} weight={patient.weight} height={patient.height} temperature={patient.temperature} pulse={patient.pulse} respiratory={patient.respiratory} pressure={patient.pressure} symptoms={patient.symptoms} diagnosis={patient.diagnosis} drugs={patient.drugs} inDate={patient.inDate} outDate={patient.outDate} action={this.handlePatientSaved} title="Save" />
      });
    }
      return (
        <Wrapper>
           <NavBar />
        <Jumbotron title="Add Patient"></Jumbotron>
        <UserForm submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
        <Footer />
        </Wrapper>
      );
    }
  }


  
  export default PatientsAdd;


