import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import PatientsBtn from "../../components/PatientsBtn/PatientsBtn";
import PracticionersBtn from "../../components/PracticionersBtn/PracticionersBtn";
import ProceduresBtn from "../../components/ProceduresBtn/ProceduresBtn";
import InventoryBtn from "../../components/InventoryBtn/InventoryBtn";
import StaffBtn from "../../components/StaffBtn/StaffBtn";


class Menu extends Component {

    render() {
      return (
        <Wrapper>
          <NavBar></NavBar>
          <PatientsBtn></PatientsBtn>
          <PracticionersBtn></PracticionersBtn>
          <ProceduresBtn></ProceduresBtn>
          <InventoryBtn></InventoryBtn>
          <StaffBtn></StaffBtn>
        </Wrapper>
      );
    }
  }
  
  export default Menu;
  