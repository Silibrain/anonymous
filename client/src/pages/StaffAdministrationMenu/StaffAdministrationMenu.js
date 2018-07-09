import React, { Component } from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import ReportsBtn  from "../../components/ReportsBtn/ReportsBtn";
import StatsBtn  from "../../components/StatsBtn/StatsBtn";


class StaffAdministrationMenu extends Component {
    state = {
      item: {}
    };
  
    render() {
      return (
        <Wrapper>
        <ReportsBtn></ReportsBtn>
        <StatsBtn></StatsBtn>
        </Wrapper>
      );
    }
  }
  
  export default StaffAdministrationMenu;