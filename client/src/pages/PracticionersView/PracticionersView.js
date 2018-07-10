import React, { Component } from "react";
import API from "../../utils/PracticionersAPI"
import Wrapper from "../../components/Wrapper/Wrapper";
import List from  "../../components/List/List";
import Jumbotron from "../../components/Jumbotron/Jumbotron";


class PracticionersView extends Component {
  state = {
    practicioner: []
  };  

  componentDidMount(){
      this.getPracticionersHandler();
    }
  
    getPracticionersHandler(){
      API.getPracticioner()
      .then(res => this.setState({practicioner: res.data}))
      .catch(err => console.log(err));
    }
  
    deletePracticionerHandler = (event, id) => {
      API.deletePracticioner(id)
      .then(res => this.getPracticionersHandler())
      .catch(err => console.log(err));
    }

    render() {
      let saved = <p> Currently, no Practicioners to Display!</p>
  
      if(this.state.practicioner.length > 0){
        saved = this.state.practicioner.map((practicioner, index) => {
          return <List key={practicioner._id} name={practicioner.name} age={practicioner.specialties} weight={practicioner.skills} height={practicioner.fees} temperature={practicioner.bio} pulse={practicioner.entryDate} respiratory={practicioner.exitDate} action={this.handlePracticionerSaved} title="Save" />
        });
      }
  
      return (
        <Wrapper>
          <Jumbotron title="Practicioner List"></Jumbotron>
          {saved}
          </Wrapper>
      ) 
    }
  }
  export default PracticionersView;