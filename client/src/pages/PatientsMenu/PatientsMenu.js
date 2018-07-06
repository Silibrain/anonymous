import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import AddPatientsBtn from "../../components/AddPatientsBtn/AddPatientsBtn";
import ViewPatientsBtn from "../../components/ViewPatientsBtn/ViewPatientsBtn";

class PatientsMenu extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <AddPatientsBtn></AddPatientsBtn>
        <ViewPatientsBtn></ViewPatientsBtn>
        
        </Wrapper>
      );
    }
  }
  
  export default PatientsMenu;