import React, { Component } from "react";
import Jumbotron from "../components/Panels/Jumbotron";
import Wrapper from "../components/Panels/Wrapper";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="cover">
          <NavBar />
          <br />
          <br />
          <div id="hero2" align="center">
            <div className="content">
              <div className="col-8">
                <Jumbotron
                  title="INCOGNIMED"
                  lead="Collaborate with professionals and keep track of information while patient identities remain secure and hidden."
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* <div className="container" align="center">
              <img src="./logo.png" alt="" width="150px" />
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
