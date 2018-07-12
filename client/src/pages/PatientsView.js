import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import List from "../components/Panels/List/List";

class PatientsView extends Component {
    state = {
      patient: []
    };  

    componentDidMount(){
        this.getPatientsHandler();
      }
    
      getPatientsHandler(){
        API.getPatient()
        .then(res => this.setState({patient: res.data}))
        .catch(err => console.log(err));
      }
    
      deletePatientHandler = (event, id) => {
        API.deletePatient(id)
        .then(res => this.getPatientsHandler())
        .catch(err => console.log(err));
      }

      render() {
        let saved = <p> Currently, no Patients to Display!</p>
    
        if(this.state.patient.length > 0){
          saved = this.state.patient.map((patient, index) => {
            return <List key={patient._id} name={patient.name} age={patient.age} weight={patient.weight} height={patient.height} temperature={patient.temperature} pulse={patient.pulse} respiratory={patient.respiratory} pressure={patient.pressure} symptoms={patient.symptoms} diagnosis={patient.diagnosis} drugs={patient.drugs} inDate={patient.inDate} outDate={patient.outDate} action={this.handlePatientSaved} title="Save" />
        });
        }
    
        return (
          <Wrapper>
               <NavBar />
            <Jumbotron title="Patient List"></Jumbotron>
            {saved}
            <Footer />
            </Wrapper>
        ) 
      }
    }

  export default PatientsView;