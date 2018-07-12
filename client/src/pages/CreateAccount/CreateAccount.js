import React, { Component } from "react";
import API from "../../utils/API";
import UserForm from "../../components/UserForm/UserForm";
import Wrapper from "../../components/Wrapper/Wrapper";
import List from "../../components/List/List";
class CreateAccount extends Component {
    state = {
      labels: [
        {id:"Name", val:""},
        {id:"Title", val:""},
        {id:"Role", val:""},
        {id: "Phone", val: ""},
        {id: "Bio", val: ""},
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
        API.saveUser(this.state.labels[0].val, this.state.labels[1].val, this.state.labels[2].val,this.state.labels[3].val, this.state.labels[4].val, this.state.labels[5].val, this.state.labels[6].val).then(res =>{
            this.setState({
                labels: [
                    {id:"Name", val:""},
                    {id:"Title", val:""},
                    {id:"Role", val:""},
                    {id: "Phone", val: ""},
                    {id: "Bio", val: ""},
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
    let labelResults = "Please enter all fields."
    if(this.state.showResults){
      labelResults = this.state.results.map((label, index) =>{
        return <List key={label._id} name={label.name} title={label.title} role={label.role} phone={label.phone} bio={label.bio} email={label.email} password={label.password} action={this.handlelabelSaved} title="Save" />
      });
    }
      return (
        <Wrapper>
     
        <UserForm submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
    
        </Wrapper>
      );
    }
  }
  
  export default CreateAccount;
  