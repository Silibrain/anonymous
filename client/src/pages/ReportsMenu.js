import React, { Component } from "react";
import Wrapper from "../components/Panels/Wrapper";
import ReportContainer from "../components/Panels/ReportContainer";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";

class ReportsMenu extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <ReportContainer></ReportContainer>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default ReportsMenu;