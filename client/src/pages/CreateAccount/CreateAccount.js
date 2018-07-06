import React, { Component } from "react";
import API from "../../utils/API";
import UserForm from "../../components/UserForm/UserForm";
import Wrapper from "../../components/Wrapper/Wrapper";
import NavBar from "../../components/NavBar/NavBar";

class CreateAccount extends Component {
    state = {
      labels: [
          {id:"Name", val:""},
          {id:"Title", val:""},
          {id:"Role", val:""},
          {id: "Fees", val: ""},
          {id: "Bio", val: ""},
          {id: "Start Date", val: Date.now()}
      ],
      results: [],
      show: false,
      error:""
    };

    handleInputChange = (event, id) => {
        const labelIndex = this.state.labels.findIndex(label => label.id === id);
        const label = {...this.state.labels[labelIndex]};
        label.val = event.target.value;
        const labels = [...this.state.labels];
        labels[labelIndex] = label;
        this.setState({labels: labels})
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getUsers(this.state.labels[0].val, this.state.labels[1].val, this.state.labels[2].val).then(res =>{
            this.setState({
                labels: [
                    {id:"Name", val:""},
                    {id:"Title", val:""},
                    {id:"Role", val:""},
                    {id: "Fees", val: ""},
                    {id: "Bio", val: ""},
                    {id: "Start Date", val: Date.now()}
                ],
                results: res.data.response.docs,
                showResults: true
            });
        })
        .catch(err => this.setState({error: err.message}));
    }
   
    render() {
      return (
        <Wrapper>

        <NavBar></NavBar>
     
        <UserForm submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
    
        </Wrapper>
      );
    }
  }
  
  export default CreateAccount;
  