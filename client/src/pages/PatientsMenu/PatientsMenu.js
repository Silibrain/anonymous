import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import AddPatientsBtn from "../../components/AddPatientsBtn/AddPatientsBtn";
import ViewPatientsBtn from "../../components/ViewPatientsBtn/ViewPatientsBtn";

class PatientsMenu extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <AddPatientsBtn></AddPatientsBtn>
        <ViewPatientsBtn></ViewPatientsBtn>
        
        </Wrapper>
      );
    }
  }
  
  export default PatientsMenu;