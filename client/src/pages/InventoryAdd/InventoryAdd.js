import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import InventoryFormInput from "../../components/InventoryFormInput/InventoryFormInput";
import SubmitInventoryBtn from "../../components/SubmitInventoryBtn/SubmitInventoryBtn";

class InventoryAdd extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <InventoryFormInput></InventoryFormInput>
        <SubmitInventoryBtn></SubmitInventoryBtn>
        </Wrapper>
      );
    }
  }
  
  export default InventoryAdd;
  