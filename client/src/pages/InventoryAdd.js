import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import InventoryForm from "../components/Forms/InventoryForm";
import Jumbotron from "../components/Panels/Jumbotron";
import List from "../components/Panels/List/List";

class InventoryAdd extends Component {
  state = {
    labels: [
      {id: "Name", val:""},
      {id: "Units", val:""},
      {id: "Unit Cost", val: ""},
      {id: "Type", val:""},
      {id: "Expiry Year", val: ""}
    ],
    results:[],
    show: false,
    error:""
  };

  handleInputChange = ( event, id ) => {
    const inventoryIndex = this.state.inventorys.findIndex(inventory => inventory.id === id);
    const inventory = { ...this.state.inventorys[inventoryIndex] };
    inventory.val = event.target.value;
    const inventorys = [ ...this.state.inventorys ];
    inventorys[inventoryIndex] = inventory;
    this.setState({ inventorys: inventorys });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getInventory(this.state.item[0].val, this.state.item[1].val, this.state.item[2].val, this.state.item[3].val, this.state.item[4].val, this.state.item[5].val, this.state.item[6].val, this.state.item[7].val, this.state.item[8].val, this.state.item[9].val, this.state.item[10].val, this.state.item[11].val, this.state.item[12].val).then(res => {
      this.setState({
        labels: [
        {id: "Name", val:""},
        {id: "Units", val:""},
        {id: "Unit Cost", val: ""},
        {id: "Type", val:""},
        {id: "Expiry Year", val: ""}
        ],
        results: res.data.response.docs,
        showResults: true
      });
    })
    .catch(err => this.setState({ error: err.message}));
  }

  handleInventorySaved = (event, id) => {
    event.preventDefault();
    const inventoryIndex = this.state.results.findIndex(result => result._id === id);
    const inventory = { ...this.state.results[inventoryIndex]};
    console.log(inventory);
    API.saveInventory({
      name: inventory.name,
      units: inventory.units,
      unitCost: inventory.unitCost,
      type: inventory.type,
      expiryyear: inventory.expiryyear
    })
    .then(res => alert('Inventory saved!'))
    .catch(err => console.log(err));
  }

  render() {
  let inventoryResults = "Please enter all fields."
  if(this.state.showResults){
    inventoryResults = this.state.results.map((inventory, index) =>{
      return <List key={inventory._id} name={inventory.name} untis={inventory.untis} unitCost={inventory.unitCost} type={inventory.type} entryDate={inventory.entryDate} expiryDate={inventory.expiryDate} action={this.handleinventorySaved} title="Save" />
    });
  }
    return (
      <Wrapper>
         <NavBar />
      <Jumbotron title="Add Inventory"></Jumbotron>
      <InventoryForm />
      <Footer />
      </Wrapper>
    );
  }
}
  
  export default InventoryAdd;
  

