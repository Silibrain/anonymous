import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import {
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";

import helpers from "../../utils/helpers.js";

class InventoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            units: "",
            unitcost: "",
            type: "",
            expiryyear: ""
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
            .saveInventory(this)
            // this.state.reset()
            // this.state.reset()
            .then(res => {
                console.log("create item", res);
                this.setState({
                    id: "",
                    name: "",
                    units: "",
                    unitcost: "",
                    type: "",
                    expiryyear: "",
                    create: true
                });
            })
            .catch(err => {
                this.setState({
                    id: "",
                    name: "",
                    units: "",
                    unitcost: "",
                    type: "",
                    expiryyear: "",
                    create: false
                });
            });
    };


    tt = () => {
        this.formSubmit();
        alert("Inventory Saved!");
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
                            Inventory
            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={this.preventDefault}>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>What is the name of the item/drug/supply?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    placeholder={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <ControlLabel>How many units are you entering?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.units}
                                    name="units"
                                    placeholder={this.state.units}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the cost per unit of each?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.unitcost}
                                    name="unitcost"
                                    placeholder={this.state.unitcost}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the type or category of each?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.type}
                                    name="type"
                                    placeholder={this.state.type}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the expiration year of each?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.expiryyear}
                                    name="expiryyear"
                                    placeholder={this.state.expiryyear}
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

export default InventoryForm;