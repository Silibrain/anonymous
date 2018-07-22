import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import InventoryForm from "../components/Forms/InventoryForm";
import Jumbotron from "../components/Panels/Jumbotron";

class InventoryAdd extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Jumbotron title="Add Inventory"></Jumbotron>
          <InventoryForm />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default InventoryAdd;


