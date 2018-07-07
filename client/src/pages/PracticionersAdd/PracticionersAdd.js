import React, { Component } from "react";
import PracticionersFormInput from "../../components/PracticionersFormInput/PracticionersFormInput";
import SubmitPracticionersBtn from "../../components/SubmitPracticionersBtn/SubmitPracticionersBtn"
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";

class PracticionersAdd extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <PracticionersFormInput></PracticionersFormInput>
        <SubmitPracticionersBtn></SubmitPracticionersBtn>
        </Wrapper>
      );
    }
  }
  
  export default PracticionersAdd;