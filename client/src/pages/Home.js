import React, { Component } from "react";
import Jumbotron from "../components/Panels/Jumbotron";
import Wrapper from "../components/Panels/Wrapper";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";

class Home extends Component {
    render() {
      return (
        <Wrapper>
          <NavBar />
          <br/>
          <br/>
          <Jumbotron title="Hippocrates" lead="ERP system for hospitals and healthcare organizations. Manage and connect information from all core areas of your business for effective decision making and business operations. Core functional areas include: EMR patient system, scheduling and procedures tracking, inventory management, accounting, content management system (CMS) for physicians and staff, and real-time data analytics."></Jumbotron>
          <Footer />
          <br/>
          <br/>
        </Wrapper>
      );
    }
  }
  
  export default Home;
  
 
    