import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";


class PatientsView extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>

           <NavBar></NavBar>
        
        </Wrapper>
      );
    }
  }
  
  export default PatientsView;