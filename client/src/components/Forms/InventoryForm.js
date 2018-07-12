import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Checkbox
} from "react-bootstrap";

import helpers from "../../utils/helpers.js";
import Modal from "react-responsive-modal";

class InventoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        name: "",
        units: 0,
        unitcost: 1992,
        type: "",
        expiryyear: 1992, 
        open: false
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
            units: 0,
            unitcost: 1992,
            type: "",
            expiryyear: 1992,
          create: true
        });
      })
      .catch(err => {
        this.setState({
            id: "",
            name: "",
            units: 0,
            unitcost: 1992,
            type: "",
            expiryyear: 1992,
          create: false
        });
      });
  };

 
  tt = () => {
    this.formSubmit();
    this.onOpenModal();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title
              className="logo"
              componentClass="h3"
              onClick={this.handleClick}
            >
              Hippocrates
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
                  type="number"
                  value={this.state.units}
                  name="units"
                  placeholder={this.state.units}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>What is the cost per unit of each?</ControlLabel>
                <FormControl
                  type="number"
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
                  name="units"
                  placeholder={this.state.type}
                  onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup>
                <ControlLabel>What is the expiration year of each?</ControlLabel>
                <FormControl
                  type="number"
                  value={this.state.expiryyear}
                  name="expiryyear"
                  placeholder={this.state.expiryyear}
                  onChange={this.handleChange}
                />
                </FormGroup>
              <Button
                className="submitBtn btn btn-default"
                type="button"
                onClick={this.tt}
              >
                Submit
              </Button>
            </form>
          </Panel.Body>
        </Panel>

        <Modal
          classNames="text-center"
          open={open}
          onClose={this.onCloseModal}
          classNames={{ overlay: "custom-overlay", modal: "custom-modal" }}
          little
        >
          {this.state.create ? (
            <h2>You have successfully entered inventory</h2>
          ) : (
            <h2>Oh no the inventory was not properly entered</h2>
          )}
        </Modal>
      </div>
    );
  }
}

export default InventoryForm;