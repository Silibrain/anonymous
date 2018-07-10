import React, { Component } from "react";
import API from "../../utils/InventoryAPI";
import Wrapper from "../../components/Wrapper/Wrapper";
import InventoryFormInput from "../../components/InventoryFormInput/InventoryFormInput";
import InventoryUpdateBtn from  "../../components/InventoryUpdateBtn/InventoryUpdateBtn";


class InventoryDetail extends Component {
    state = {
      item: {}
    };

    componentDidMount(){
      this.getInventory();
    }

    getInventory(){
      API.getInventory()
      .then(res => this.setState({savedInventory: res.data}))
      .catch(err => console.log(err));
    }

    deleteInventory = (event, id) => {
      API.deleteInventory(id)
      .then(res => this.getInventoryDetail())
      .catch(err => console.log(err));
    }
  
    render() {
      return (
        <Wrapper>          
        <InventoryFormInput></InventoryFormInput>
        <InventoryUpdateBtn></InventoryUpdateBtn>
        </Wrapper>
      );
    }
  }
  
  export default InventoryDetail;
  