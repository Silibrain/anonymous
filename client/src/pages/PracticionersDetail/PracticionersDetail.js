import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from  "../../components/NavBar/NavBar";
import PracticionersFormInput from "../../components/PracticionersFormInput/PracticionersFormInput";
// import PracticionersDeleteBtn from "../../components/PracticionersDeleteBtn/PracticionersDeleteBtn";
// import PracticionersUpdateBtn from  "../../components/PracticionersUpdateBtn/PracticionersUpdateBtn";


class PracticionersDetail extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        <PracticionersFormInput></PracticionersFormInput>
        {/* <PracticionersDeleteBtn></PracticionersDeleteBtn> */}
        {/* <PracticionersUpdateBtn></PracticionersUpdateBtn> */}
        </Wrapper>
      );
    }
  }
  
  export default PracticionersDetail;
  