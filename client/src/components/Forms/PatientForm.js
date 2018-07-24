import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import {
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";

import helpers from "../../utils/helpers";

class PatientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
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

    }
    componentDidMount() {
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    preventDefault = e => {
        e.preventDefault();
    };

    formSubmit = () => {
        // console.log(this)
        helpers
            .savePatient(this)
            // this.state.reset()
            // this.state.reset()
            .then(res => {
                console.log("create item", res);
                this.setState({
                    id: "",
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
                    drugs: "",
                    create: true
                });
            })
            .catch(err => {
                this.setState({
                    id: "",
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
                    drugs: "",
                    create: false
                });
            });
    };


    tt = () => {
        this.formSubmit();
        alert("Patient Saved!");
        // console.log(this)
    };

    render() {
        return (
            <div>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title
                            className="logo"
                            componentClass="h3"
                            onClick={this.handleClick}
                        >
                            Patient
            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={this.preventDefault}>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>What is the name of the patient?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    placeholder={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>How old is the patient?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.age}
                                    name="age"
                                    placeholder={this.state.age}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>How much does the patient weigh (lbs)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.weight}
                                    name="weight"
                                    placeholder={this.state.weight}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>How tall is the patient (ft)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.height}
                                    name="height"
                                    placeholder={this.state.height}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's body temperature (F)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.temperature}
                                    name="temperature"
                                    placeholder={this.state.temperature}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's pulse (bpm)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.pulse}
                                    name="pulse"
                                    placeholder={this.state.pulse}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's respitaroty rate (bpm)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.respiratoryrate}
                                    name="respiratoryrate"
                                    placeholder={this.state.respiratoryrate}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's blood pressure (mm Hg)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.pressure}
                                    name="pressure"
                                    placeholder={this.state.pressure}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What are the patient's symptoms?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.symptoms}
                                    name="symptoms"
                                    placeholder={this.state.symptoms}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's diagnosis?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.diagnosis}
                                    name="diagnosis"
                                    placeholder={this.state.diagnosis}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Is the patient taking any drugs? Which?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.drugs}
                                    name="drugs"
                                    placeholder={this.state.drugs}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button
                                className="btn btn-info"
                                type="button"
                                onClick={this.tt}
                            >
                                Submit
              </Button>
                        </form>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default PatientForm;