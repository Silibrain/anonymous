import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    item: {}
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>

            </Jumbotron>        
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;


