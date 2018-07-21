import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import {
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";

import helpers from "../../utils/helpers.js";

class ProcedureForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            type: "",
            location: "",
            result: "",
            avgtime: "",
            capex: "",
            opex: ""
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
            .saveProcedure(this)
            // this.state.reset()
            // this.state.reset()
            .then(res => {
                console.log("create item", res);
                this.setState({
                    id: "",
                    name: "",
                    type: "",
                    location: "",
                    result: "",
                    avgtime: "",
                    capex: "",
                    opex: "",
                    create: true
                });
            })
            .catch(err => {
                this.setState({
                    id: "",
                    name: "",
                    type: "",
                    location: "",
                    result: "",
                    avgtime: "",
                    capex: "",
                    opex: "",
                    create: false
                });
            });
    };


    tt = () => {
        this.formSubmit();
        alert("Procedure Saved!");
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
                            Procedure
            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={this.preventDefault}>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>What is the name of the procedure?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    placeholder={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>What type of procedure is this?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.type}
                                    name="type"
                                    placeholder={this.state.type}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Where is this procedure performed?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.location}
                                    name="location"
                                    placeholder={this.state.location}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Does the patient have any exam results available?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.result}
                                    name="result"
                                    placeholder={this.state.result}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>How long does the procedure take?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.avgtime}
                                    name="avgtime"
                                    placeholder={this.state.avgtime}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the initial investment for this procedure?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.capex}
                                    name="capex"
                                    placeholder={this.state.capex}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What are the continued expenses associated with this procedure?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.opex}
                                    name="opex"
                                    placeholder={this.state.opex}
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

export default ProcedureForm;