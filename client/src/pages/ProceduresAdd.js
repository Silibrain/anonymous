import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import UserForm from "../components/Forms/UserForm/UserForm";
import Jumbotron from "../components/Panels/Jumbotron";
import List from "../components/Panels/List/List";

class ProceduresAdd extends Component {
  state = {
    labels: [
      {id: "Name", val:""},
      {id: "Type", val:""},
      {id: "Location", val: ""},
      {id: "Result", val:""},
      {id: "Average Time", val:""},
      {id: "Capex", val: ""},
      {id: "Opex", val:""},
      {id: "Entry Date", val:""},
      {id: "Exit Date", val:""},
    ],
    results:[],
    show: false,
    error:""
  };

  handleInputChange = ( event, id ) => {
    const procedureIndex = this.state.procedures.findIndex(procedure => procedure.id === id);
    const procedure = { ...this.state.procedures[procedureIndex] };
    procedure.val = event.target.value;
    const procedures = [ ...this.state.procedures ];
    procedures[procedureIndex] = procedure;
    this.setState({ procedures: procedures });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getprocedure(this.state.item[0].val, this.state.item[1].val, this.state.item[2].val, this.state.item[3].val, this.state.item[4].val, this.state.item[5].val, this.state.item[6].val, this.state.item[7].val, this.state.item[8].val, this.state.item[9].val, this.state.item[10].val, this.state.item[11].val, this.state.item[12].val).then(res => {
      this.setState({
        labels: [
        {id: "Name", val:""},
        {id: "Type", val:""},
        {id: "Location", val: ""},
        {id: "Result", val:""},
        {id: "Average Time", val:""},
        {id: "Capex", val: ""},
        {id: "Opex", val:""},
        {id: "Entry Date", val:""},
        {id: "Exit Date", val:""},
        ],
        results: res.data.response.docs,
        showResults: true
      });
    })
    .catch(err => this.setState({ error: err.message}));
  }

  handleprocedureSaved = (event, id) => {
    event.preventDefault();
    const procedureIndex = this.state.results.findIndex(result => result._id === id);
    const procedure = { ...this.state.results[procedureIndex]};
    console.log(procedure);
    API.saveProcedure({
      name: procedure.name,
      type: procedure.specialties,
      location: procedure.skills,
      result: procedure.fees,
      avgtime: procedure.bio,
      capex: procedure.entryDate,
      opex: procedure.exitDate,
      entryDate: procedure.exitDate,
      exitDate: procedure.exitDate,
    })
    .then(res => alert('Procedure saved!'))
    .catch(err => console.log(err));
  }

  render() {
  let procedureResults = "Please enter all fields."
  if(this.state.showResults){
    procedureResults = this.state.results.map((procedure, index) =>{
      return <List key={procedure._id} name={procedure.name} type={procedure.type} location={procedure.location} result={procedure.result} avgtime={procedure.avgtime} capex={procedure.capex} opex={procedure.opex} entryDate={procedure.entryDate} exitDate={procedure.exitDate} action={this.handleProcedureSaved} title="Save" />
    });
  }
    return (
      <Wrapper>
         <NavBar />
      <Jumbotron title="Add Procedure"></Jumbotron>
      <UserForm submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
      <Footer />
      </Wrapper>
    );
  }
}
  
  export default ProceduresAdd;
  