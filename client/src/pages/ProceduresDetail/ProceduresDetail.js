import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProceduresFormInput from "../../components/ProceduresFormInput/ProceduresFormInput";
import UpdateUserBtn from "../../components/UpdateUserBtn/UpdateUserBtn"
import DeleteUserBtn from "../../components/DeleteUserBtn/DeleteUserBtn"
import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";


class ProceduresDetail extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <NavBar></NavBar>
        <Wrapper>
        
        </Wrapper>
      );
    }
  }
  
  export default ProceduresDetail;
  
