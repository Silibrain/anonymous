import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import ReactModal from "react-modal";

class InventoryView extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
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
    this.loadInventory();
  }

  loadInventory() {
    API.getInventory()
      .then(res => this.setState({ inventory: res.data, name: "", units: "", unitcost: "", type: "", expiryyear: "" }))
      .catch(err => console.log(err));
  }

  deleteInventory = id => {
    API.deleteInventory(id)
      .then(res => this.loadInventory())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Jumbotron title="Inventory List"></Jumbotron>
          {this.state.inventory.length ? (
            <List>
              {this.state.inventory.map(inventory => (
                <ListItem key={inventory._id}>
                  <strong onClick={this.handleOpenModal}>
                    {inventory.units} of {inventory.name}
                  </strong>
                  <ReactModal isOpen={this.state.showModal} contentLabel={inventory._id}>
                    <h6>Inventory Name: {inventory.name}</h6>
                    <h6>Inventory Units: {inventory.units}</h6>
                    <h6>Inventory Unit Cost: {inventory.unitcost}</h6>
                    <h6>Inventory Type: {inventory.type}</h6>
                    <h6>Inventory Expiry Year: {inventory.expiryyear}</h6>
                    <button onClick={this.handleCloseModal}>Close</button>
                  </ReactModal>
                  <DeleteBtn onClick={() => this.deleteInventory(inventory._id)} />
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

export default InventoryView;
