import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Items extends Component {
  state = {
    items: []
  };

    this.loadItems();
  

  loadItems = () => {
    API.getItems()
      .then(res => this.setState({ items: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (true) {
      API.saveItem({
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
 
          <Col size="md-12"> 
            <form>
              <Input

              />
              <Input

              />
              <FormBtn

              >

              </FormBtn>
            </form> 
          </Col> 
    </div> 
    );
  }
}

export default Items;
