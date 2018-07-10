import React, { Component } from "react";
import API from "../../utils/ProceduresAPI";
import Wrapper from "../../components/Wrapper/Wrapper";
import ProceduresFormInput from "../../components/ProceduresFormInput/ProceduresFormInput";
import ProceduresDeleteBtn from "../../components/ProceduresDeleteBtn/ProceduresDeleteBtn";
import ProceduresUpdateBtn from  "../../components/ProceduresUpdateBtn/ProceduresUpdateBtn";


class ProceduresDetail extends Component {
    state = {
      item: {}
    };
    componentDidMount(){
      this.getProcedures();
    }

    getProcedures(){
      API.getProcedures()
      .then(res => this.setState({saveProcedures: res.data}))
      .catch(err => console.log(err));
    }

    deleteProcedures = (event, id) => {
      API.deleteProcedures(id)
      .then(res => this.getProcedures())
      .catch(err => console.log(err));
    }
  
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
  
