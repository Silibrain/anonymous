import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import BSBtn  from "../../components/BSBtn/BSBtn";
import ISBtn  from "../../components/ISBtn/ISBtn";
import CSBtn  from "../../components/CSBtn/CSBtn";



class ReportsMenu extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <BSBtn></BSBtn>
        <ISBtn></ISBtn>
        <CSBtn></CSBtn>
        </Wrapper>
      );
    }
  }
  
  export default ReportsMenu;