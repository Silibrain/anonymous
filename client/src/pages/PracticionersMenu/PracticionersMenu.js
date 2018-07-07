import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import AddPracticionersBtn from "../../components/AddPracticionersBtn/AddPracticionersBtn";
import ViewPracticionersBtn from "../../components/ViewPracticionersBtn/ViewPracticionersBtn";


class PracticionersMenu extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <AddPracticionersBtn></AddPracticionersBtn>
        <ViewPracticionersBtn></ViewPracticionersBtn>

        </Wrapper>
      );
    }
  }
  
  export default PracticionersMenu;