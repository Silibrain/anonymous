import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import List from "../components/Panels/List/List";

class ProceduresExamsView extends Component {
  state = {
    procedures: []
  };  

  componentDidMount(){
      this.getProceduresHandler();
    }
  
    getProceduresHandler(){
      API.getProcedures()
      .then(res => this.setState({procedures: res.data}))
      .catch(err => console.log(err));
    }
  
    deleteProceduresHandler = (event, id) => {
      API.deleteProcedures(id)
      .then(res => this.getProceduresHandler())
      .catch(err => console.log(err));
    }

    render() {
      let saved = <p> Currently, no Procedures to Display!</p>
  
      if(this.state.procedures.length > 0){
        saved = this.state.procedures.map((procedure, index) => {
          return <List key={procedure.id} name={procedure.name} type={procedure.type} location={procedure.location} result={procedure.result} avgtime={procedure.avgtime} capex={procedure.capex} opex={procedure.opex} action={this.handleProcedureSaved} title="Save" />
        });
      }
  
      return (
        <Wrapper>
           <NavBar />
          <Jumbotron title="Procedures List"></Jumbotron>
          {saved}
          <Footer />
          </Wrapper>
      ) 
    }
  }
  
  export default ProceduresExamsView;