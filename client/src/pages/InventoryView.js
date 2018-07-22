import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/Buttons/DeleteBtn";

class InventoryView extends Component {
  state = {
    inventory: [],
    name: "",
    units: "",
    unitcost: "",
    type: "",
    expiryyear: ""
  };

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
                  <Link to={"/inventory/" + inventory._id}>
                    <strong>
                      {inventory.units} of {inventory.name}
                    </strong>
                  </Link>
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
