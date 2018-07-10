import React, { Component } from "react";
import API from "../../utils/PatientsAPI";
import Wrapper from "../../components/Wrapper/Wrapper";
import PatientsFormInput from "../../components/PatientsFormInput/PatientsFormInput";
import PatientDeleteBtn from "../../components/PatientDeleteBtn/PatientDeleteBtn";
import PatientUpdateBtn from  "../../components/PatientUpdateBtn/PatientUpdateBtn";


class PatientsDetail extends Component {
    state = {
      item: {}
    };
    componentDidMount(){
      this.getPatient();
    }

    getPatient(){
      API.getPatient()
      .then(res => this.setState({savePatient: res.data}))
      .catch(err => console.log(err));
    }

    deletePatient = (event, id) => {
      API.deletePatient(id)
      .then(res => this.getPatient())
      .catch(err => console.log(err));
    }

    
  
    render() {
      return (
        <Wrapper>
        <PatientsFormInput></PatientsFormInput>
        <PatientDeleteBtn></PatientDeleteBtn>
        <PatientUpdateBtn></PatientUpdateBtn>
        </Wrapper>
      );
    }
  }
  
  export default PatientsDetail;
  