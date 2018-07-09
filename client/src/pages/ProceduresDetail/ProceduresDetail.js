import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import ProceduresFormInput from "../../components/ProceduresFormInput/ProceduresFormInput";
import ProceduresDeleteBtn from "../../components/ProceduresDeleteBtn/ProceduresDeleteBtn";
import ProceduresUpdateBtn from  "../../components/ProceduresUpdateBtn/ProceduresUpdateBtn";


class ProceduresDetail extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <ProceduresFormInput></ProceduresFormInput>
        <ProceduresDeleteBtn></ProceduresDeleteBtn>
        <ProceduresUpdateBtn></ProceduresUpdateBtn>

        </Wrapper>
      );
    }
  }
  
  export default ProceduresDetail;
  
