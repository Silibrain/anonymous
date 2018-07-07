import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import UserForm from "../../components/UserForm/UserForm";
import NavBar from "../../components/NavBar/NavBar";
import UpdateUserBtn from "../../components/UpdateUserBtn/UpdateUserBtn";


class UpdateAccount extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <UserForm></UserForm>
        <UpdateUserBtn></UpdateUserBtn>
        </Wrapper>
      );
    }
  }
  
  export default UpdateAccount;