import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import InventoryFormInput from "../../components/InventoryFormInput/InventoryFormInput";
import InventoryDeleteBtn from "../../components/InventoryDeleteBtn/InventoryDeleteBtn";
import InventoryUpdateBtn from  "../../components/InventoryUpdateBtn/InventoryUpdateBtn";


class InventoryDetail extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <InventoryFormInput></InventoryFormInput>
        <InventoryDeleteBtn></InventoryDeleteBtn>
        <InventoryUpdateBtn></InventoryUpdateBtn>
        </Wrapper>
      );
    }
  }
  
  export default InventoryDetail;
  