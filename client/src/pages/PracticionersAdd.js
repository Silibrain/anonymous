import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import PracticionerForm from "../components/Forms/PracticionerForm";
import Jumbotron from "../components/Panels/Jumbotron";
import List from "../components/Panels/List/List";

class PracticionersAdd extends Component {
  state = {
    labels: [
      {id: "Name", val:""},
      {id: "Specialties", val:""},
      {id: "Skills", val: ""},
      {id: "Fees", val:""},
      {id: "Bio", val:""}
    ],
    results:[],
    show: false,
    error:""
  };

  handleInputChange = ( event, id ) => {
    const practicionerIndex = this.state.practicioners.findIndex(practicioner => practicioner.id === id);
    const practicioner = { ...this.state.practicioners[practicionerIndex] };
    practicioner.val = event.target.value;
    const practicioners = [ ...this.state.practicioners ];
    practicioners[practicionerIndex] = practicioner;
    this.setState({ practicioners: practicioners });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getPracticioner(this.state.item[0].val, this.state.item[1].val, this.state.item[2].val, this.state.item[3].val, this.state.item[4].val, this.state.item[5].val, this.state.item[6].val, this.state.item[7].val, this.state.item[8].val, this.state.item[9].val, this.state.item[10].val, this.state.item[11].val, this.state.item[12].val).then(res => {
      this.setState({
        labels: [
          {id: "Name", val:""},
          {id: "Specialties", val:""},
          {id: "Skills", val: ""},
          {id: "Fees", val:""},
          {id: "Bio", val:""}
        ],
        results: res.data.response.docs,
        showResults: true
      });
    })
    .catch(err => this.setState({ error: err.message}));
  }

  handlePracticionerSaved = (event, id) => {
    event.preventDefault();
    const practicionerIndex = this.state.results.findIndex(result => result._id === id);
    const practicioner = { ...this.state.results[practicionerIndex]};
    console.log(practicioner);
    API.savePracticioner({
      name: practicioner.name,
      specialties: practicioner.specialties,
      skills: practicioner.skills,
      fees: practicioner.fees,
      bio: practicioner.bio
    })
    .then(res => alert('Practicioner saved!'))
    .catch(err => console.log(err));
  }

  render() {
  let practicionerResults = "Please enter all fields."
  if(this.state.showResults){
    practicionerResults = this.state.results.map((practicioner, index) =>{
      return <List key={practicioner._id} name={practicioner.name} age={practicioner.specialties} weight={practicioner.skills} height={practicioner.fees} temperature={practicioner.bio} pulse={practicioner.entryDate} respiratory={practicioner.exitDate} action={this.handlePracticionerSaved} title="Save" />
    });
  }
    return (
      <Wrapper>
         <NavBar />
      <Jumbotron title="Add Practicioner"></Jumbotron>
      <PracticionerForm />
      <Footer />
      </Wrapper>
    );
  }
}
  
  export default PracticionersAdd;