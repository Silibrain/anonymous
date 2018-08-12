import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import ReactModal from "react-modal";

class PatientsView extends Component {
  constructor() {
    super()
    this.state = {
      patients: [],
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.loadPatients();
  }

  loadPatients() {
    API.getPatients()
      .then(res => {
        this.setState({ patients: res.data, name: "", age: "", weight: "", height: "", temperature: "", pulse: "", respiratoryrate: "", pressure: "", symptoms: "", diagnosis: "", drugs: "" })
      })
      .catch(err => console.log(err));
  }

  deletePatient = id => {
    API.deletePatient(id)
      .then(res => this.loadPatients())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Jumbotron title="Patient List"></Jumbotron>
          {this.state.patients.length ? (
            <List>
              {this.state.patients.map(patient => (
                <ListItem key={patient._id}>
                  <strong onClick={this.handleOpenModal}>
                    {patient.name} with {patient.diagnosis}
                  </strong>
                  <ReactModal isOpen={this.state.showModal} contentLabel={patient._id}>
                    <h6>Patient Name: {patient.name}</h6>
                    <h6>Patient Age: {patient.age}</h6>
                    <h6>Patient Weight: {patient.weight}</h6>
                    <h6>Patient Height: {patient.height}</h6>
                    <h6>Patient Temperature: {patient.temperature}</h6>
                    <h6>Patient Pulse: {patient.pulse}</h6>
                    <h6>Patient Respiratory Rate: {patient.respiratoryrate}</h6>
                    <h6>Patient Pressure: {patient.pressure}</h6>
                    <h6>Patient Symptoms: {patient.symptoms}</h6>
                    <h6>Patient Diagnosis: {patient.diagnosis}</h6>
                    <h6>Patient Drugs: {patient.drugs}</h6>
                    <button onClick={this.handleCloseModal}>Close</button>
                  </ReactModal>

                  <DeleteBtn onClick={() => this.deletePatient(patient._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

export default PatientsView;
