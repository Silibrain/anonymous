import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import {
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";

import helpers from "../../utils/helpers.js";

class PracticionerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            specialties: "",
            skills: "",
            fees: "",
            bio: ""
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
        helpers
            .savePracticioner(this)
            // this.state.reset()
            // this.state.reset()
            .then(res => {
                console.log("create item", res);
                this.setState({
                    id: "",
                    name: "",
                    specialties: "",
                    skills: "",
                    fees: "",
                    bio: "",
                    create: true
                });
            })
            .catch(err => {
                this.setState({
                    id: "",
                    name: "",
                    specialties: "",
                    skills: "",
                    fees: "",
                    bio: "",
                    create: false
                });
            });
    };


    tt = () => {
        this.formSubmit();
        alert("Practicioner Saved!");
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
                            Practicioner
            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={this.preventDefault}>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>What is the name of the practicioner?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    placeholder={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>What specialty is the physician?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.specialties}
                                    name="specialties"
                                    placeholder={this.state.specialties}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What procedures is the practicioner able to do?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.skills}
                                    name="skills"
                                    placeholder={this.state.skills}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What are the practicioner's fees?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.fees}
                                    name="fees"
                                    placeholder={this.state.fees}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Add any relevant background tha tthe practicioner has</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.bio}
                                    name="bio"
                                    placeholder={this.state.bio}
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

export default PracticionerForm;