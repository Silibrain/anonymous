import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import AddProceduresBtn from "../../components/AddProceduresBtn/AddProceduresBtn";
import ViewProceduresBtn from "../../components/ViewProceduresBtn/ViewProceduresBtn";


class ProceduresExamsMenu extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <AddProceduresBtn></AddProceduresBtn>
        <ViewProceduresBtn></ViewProceduresBtn>
        
        
        </Wrapper>
      );
    }
  }
  
  export default ProceduresExamsMenu;