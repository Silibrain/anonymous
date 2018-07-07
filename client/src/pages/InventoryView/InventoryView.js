import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import List from  "../../components/List/List"


class InventoryView extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <List></List>


        </Wrapper>
      );
    }
  }
  
  export default InventoryView;
  