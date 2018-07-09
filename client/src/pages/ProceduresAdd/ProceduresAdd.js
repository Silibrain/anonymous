import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import ProceduresFormInput from "../../components/ProceduresFormInput/ProceduresFormInput";
import SubmitProceduresBtn from "../../components/SubmitProceduresBtn/SubmitProceduresBtn";

class ProceduresAdd extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <ProceduresFormInput></ProceduresFormInput>
        <SubmitProceduresBtn></SubmitProceduresBtn>
        </Wrapper>
      );
    }
  }
  
  export default ProceduresAdd;
  