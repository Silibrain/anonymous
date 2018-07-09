import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import UserForm from  "../../components/UserForm/UserForm";


class InventoryView extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <UserForm></UserForm>
        </Wrapper>
      );
    }
  }
  
  export default InventoryView;
  