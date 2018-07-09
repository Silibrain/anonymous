import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import InventoryFormInput from "../../components/InventoryFormInput/InventoryFormInput";
import SubmitInventoryBtn from "../../components/SubmitInventoryBtn/SubmitInventoryBtn";

class InventoryAdd extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <InventoryFormInput></InventoryFormInput>
        <SubmitInventoryBtn></SubmitInventoryBtn>
        </Wrapper>
      );
    }
  }
  
  export default InventoryAdd;
  