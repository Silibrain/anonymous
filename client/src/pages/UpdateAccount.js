import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import { AccountPanel} from "../components/Panels";
import Jumbotron from "../components/Panels/Jumbotron";



class CreateAccount extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Jumbotron title="Account"></Jumbotron>
          <AccountPanel />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

  
  export default CreateAccount;
  