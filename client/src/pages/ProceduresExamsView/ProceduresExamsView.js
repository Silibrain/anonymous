import React, { Component } from "react";
import API from "../../utils/ProceduresAPI"
import Wrapper from "../../components/Wrapper/Wrapper";
import List from  "../../components/List/List";
import Jumbotron from "../../components/Jumbotron/Jumbotron";


class ProceduresExamsView extends Component {
  state = {
    procedures: []
  };  

  componentDidMount(){
      this.getProceduressHandler();
    }
  
    getProceduressHandler(){
      API.getProcedures()
      .then(res => this.setState({procedures: res.data}))
      .catch(err => console.log(err));
    }
  
    deleteProceduresHandler = (event, id) => {
      API.deleteProcedures(id)
      .then(res => this.getProceduressHandler())
      .catch(err => console.log(err));
    }

    render() {
      let saved = <p> Currently, no Proceduress to Display!</p>
  
      if(this.state.procedures.length > 0){
        saved = this.state.procedures.map((procedure, index) => {
          return <List key={procedure._id} name={procedure.name} age={procedure.type} weight={procedure.location} height={procedure.result} temperature={procedure.avgtime} pulse={procedure.capex} respiratory={procedure.opex} respiratory={procedure.entryDate} respiratory={procedure.exitDate} action={this.handleProcedureSaved} title="Save" />
        });
      }
  
      return (
        <Wrapper>
          <Jumbotron title="Procedures List"></Jumbotron>
          {saved}
          </Wrapper>
      ) 
    }
  }
  
  export default ProceduresExamsView;