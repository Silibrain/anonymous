import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List} from "../components/List";

class InventoryView extends Component {
  state = {
    inventory: []
  };  

  componentDidMount(){
      this.getInventoryHandler();
    }
  
    getInventoryHandler(){
      API.getInventory()
      .then(res => this.setState({inventory: res.data}))
      .catch(err => console.log(err));
    }
  
    deleteInventoryHandler = (event, id) => {
      API.deleteInventory(id)
      .then(res => this.getinventoryHandler())
      .catch(err => console.log(err));
    }

    render() {
      let saved = <p> Currently, no Inventory to Display!</p>
  
      if(this.state.inventory.length > 0){
        saved = this.state.inventory.map((inventory, index) => {
          return <List key={inventory._id} name={inventory.name} units={inventory.units} unitCost={inventory.unitCost} type={inventory.type} entryDate={inventory.entryDate} expiryDate={inventory.pulse} action={this.handleinventorySaved} title="Save" />
      });
      }
  
      return (
        <Wrapper>
             <NavBar />
          <Jumbotron title="Inventory List"></Jumbotron>
          {saved}
          <Footer />
          </Wrapper>
      ) 
    }
  }
  
  export default InventoryView;
  