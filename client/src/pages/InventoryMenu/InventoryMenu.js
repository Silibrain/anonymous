import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import AddInventoryBtn from "../../components/AddInventoryBtn/AddInventoryBtn";
import ViewInventoryBtn from "../../components/ViewInventoryBtn/ViewInventoryBtn";


class InventoryMenu extends Component {

    render() {
      return (
        <Wrapper>
        <AddInventoryBtn></AddInventoryBtn>
        <ViewInventoryBtn></ViewInventoryBtn>
        </Wrapper>
      );
    }
  }
  
  export default InventoryMenu;
  
