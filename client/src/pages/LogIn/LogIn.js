import React, { Component } from "react";
import API from "../../utils/API";
import UserForm from "../../components/UserForm/UserForm";
import Wrapper from "../../components/Wrapper/Wrapper";

class LogIn extends Component {
    state = {
      labels: [
        {id:"Email", val:""},
        {id: "Password", val: ""}
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
        API.getUsers(this.state.labels[0].val, this.state.labels[1].val).then(res =>{
            this.setState({
                labels: [
                    {id:"Email", val:""},
                    {id: "Password", val: ""}
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
     
        <UserForm submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
    
        </Wrapper>
      );
    }
  }
  
  export default LogIn;
  