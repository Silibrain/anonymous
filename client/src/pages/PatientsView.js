import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import Modal from "react-modal";

class PatientsView extends Component {
  constructor() {
    super();
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
        this.setState({
          patients: res.data,
<<<<<<< HEAD
          name: "",
          age: "",
          weight: "",
          height: "",
          temperature: "",
          pulse: "",
          respiratoryrate: "",
          pressure: "",
          symptoms: "",
          diagnosis: "",
          drugs: ""
        });
=======
          gender: "",
          personalhistory: "",
          familyhistory: "",
          signs: "",
          location: "",
          travels: "",
          age: "",
          weight: "",
          height: "",
          tempcurr: "",
          heartrate: "",
          respiratoryrate: "",
          bloodpressure: "",
          oxygensaturation: "",
          findings: "",
          symptoms: "",
          sodium: "",
          potassium: "",
          chlorine: "",
          bicarb: "",
          bun: "",
          platelets: "",
          creatinine: "",
          wbc: "",
          hct: "",
          hepatic: "",
          kidney: "",
          lipids: "",
          specials: "",
          glucose: "",
          xray: "",
          ctscan: "",
          mri: "",
          ultrasound: "",
          pet: "",
          diagnosis: "",
          daysintreatment: "",
          drugsintreatment: "",
          proceduresintreatment: ""
        })
>>>>>>> master
      })
      .catch(err => console.log(err));
  }

  deletePatient = id => {
    API.deletePatient(id)
      .then(res => this.loadPatients())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
<<<<<<< HEAD
          <Jumbotron title="Patient List" />
=======
          <Jumbotron title="View Cases"></Jumbotron>
>>>>>>> master
          {this.state.patients.length ? (
            <List>
              {this.state.patients.map(patient => (
                <ListItem key={patient._id}>
                  <strong onClick={this.handleOpenModal}>
                    {patient.age}-yr-old {patient.gender} diagnosed with {patient.diagnosis}
                  </strong>
<<<<<<< HEAD
                  <Modal
                    isOpen={this.state.showModal}
                    contentLabel={patient._id}
                  >
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
=======
                  <ReactModal isOpen={this.state.showModal} contentLabel={patient._id}>
                    <h2>Case Study ID: {patient._id}</h2>
                    <br/>
                    <h4>Vitals</h4>
                    <h6>Personal Medical History: {patient.personalhistory}</h6>
                    <h6>Family Medical History: {patient.familyhistory}</h6>
                    <h6>Symptoms: {patient.symptoms}</h6>
                    <h6>Medical Signs: {patient.signs}</h6>
                    <h6>Gender: {patient.gender}</h6>
                    <h6>Age: {patient.age}</h6>
                    <h6>Location: {patient.location}</h6>
                    <h6>Recent Travels: {patient.travels}</h6>
                    <h6>Weight: {patient.weight}</h6>
                    <h6>Height: {patient.height}</h6>
                    <h6>Body Temperature: {patient.tempcurr}</h6>
                    <h6>Heart Rate: {patient.heartrate}</h6>
                    <h6>Respiratory Rate: {patient.respiratoryrate}</h6>
                    <h6>Blood Pressure: {patient.bloodpressure}</h6>
                    <h6>Oxygen Saturation: {patient.oxygensaturation}</h6>
                    <br/>
                    <h4>Labs</h4>
                    <h6>Na: {patient.sodium}</h6>
                    <h6>K: {patient.potassium}</h6>
                    <h6>Cl: {patient.chlorine}</h6>
                    <h6>Bicarbonate: {patient.bicarb}</h6>
                    <h6>BUN: {patient.bun}</h6>
                    <h6>Glucose: {patient.glucose}</h6>
                    <h6>Plateletes: {patient.platelets}</h6>
                    <h6>Creatinine: {patient.creatinine}</h6>
                    <h6>WBC: {patient.wbc}</h6>
                    <h6>HCT: {patient.hct}</h6>
                    <h6>Hepatic Functionality: {patient.hepatic}</h6>
                    <h6>Kidney Functionality: {patient.kidney}</h6>
                    <h6>Specials: {patient.specials}</h6>
                    <br/>
                    <h4>Radiology</h4>
                    <h6>Ultrasound: {patient.ultrasound}</h6>
                    <h6>X-Ray: {patient.xray}</h6>
                    <h6>CT-Scan: {patient.ctscan}</h6>
                    <h6>MRI: {patient.mri}</h6>
                    <h6>PET/CT: {patient.pet}</h6>
                    <br/>
                    <h4>Diagnosis</h4>
                    <h6>{patient.diagnosis}</h6>
                    <br/>
                    <h4>Clinical Treatment</h4>
                    <h6>Days in Treatment: {patient.daysintreatment}</h6>
                    <h6>Medications for Treatment: {patient.drugsintreatment}</h6>
                    <br/>
                    <h4>Surgical Treatment</h4>
                    <h6>Procedures in Treatment: {patient.proceduresintreatment}</h6>
                    <br/>
>>>>>>> master
                    <button onClick={this.handleCloseModal}>Close</button>
                  </Modal>

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
    );
  }
}

export default PatientsView;
