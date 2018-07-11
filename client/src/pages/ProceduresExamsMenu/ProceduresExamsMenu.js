import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import AddProceduresBtn from "../../components/AddProceduresBtn/AddProceduresBtn";
import ViewProceduresBtn from "../../components/ViewProceduresBtn/ViewProceduresBtn";


class ProceduresExamsMenu extends Component {

    render() {
      return (
        <Wrapper>
        <AddProceduresBtn></AddProceduresBtn>
        <ViewProceduresBtn></ViewProceduresBtn>
        
        
        </Wrapper>
      );
    }
  }
  
  export default ProceduresExamsMenu;