import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import GraphContainer from "../../components/GraphContainer/GraphContainer";



class StatisticsMenu extends Component {

    render() {
      return (
        <Wrapper>   
        <GraphContainer></GraphContainer>
        </Wrapper>
      );
    }
  }
  
  export default StatisticsMenu;