import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/Buttons/DeleteBtn";

class PatientsView extends Component {
  state = {
    patients: [],
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
  };

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
                  <Link to={"/patient/" + patient._id}>
                    <strong>
                      {patient.name} with {patient.diagnosis}
                    </strong>
                  </Link>
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
