import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import List from  "../../components/List/List"


class InventoryView extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <List></List>
        </Wrapper>
      );
    }
  }
  
  export default InventoryView;
  