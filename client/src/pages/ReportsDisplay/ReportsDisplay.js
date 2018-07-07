import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
// import ReportsContainer from "../../components/ReportsContainer/ReportsContainer";


class ReportsDisplay extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <NavBar></NavBar>
        {/* <ReportsContainer></ReportsContainer> */}
        </Wrapper>
      );
    }
  }
  
  export default ReportsDisplay;