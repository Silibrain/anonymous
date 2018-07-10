import React, { Component } from "react";
import API from "../../utils/InventoryAPI"
import Wrapper from "../../components/Wrapper/Wrapper";
import List from  "../../components/List/List";
import Jumbotron from "../../components/Jumbotron/Jumbotron";


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
          <Jumbotron title="Inventory List"></Jumbotron>
          {saved}
          </Wrapper>
      ) 
    }
  }
  
  export default InventoryView;
  