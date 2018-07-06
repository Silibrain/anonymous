import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";
import GraphContainer from "../../components/GraphContainer/GraphContainer";



class StatisticsMenu extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>   
        <NavBar></NavBar>
        <GraphContainer></GraphContainer>
        </Wrapper>
      );
    }
  }
  
  export default StatisticsMenu;