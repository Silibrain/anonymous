import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/Buttons/DeleteBtn";

class ProceduresExamsView extends Component {
  state = {
    procedures: [],
    name: "",
    type: "",
    location: "",
    result: "",
    avgtime: "",
    capex: "",
    opex: ""
  };

  componentDidMount() {
    this.loadProcedures();
  }

  loadProcedures() {
    API.getProcedure()
      .then(res => this.setState({ procedures: res.data, name: "", type: "", location: "", result: "", avgtime: "", capex: "", opex: "" }))
      .catch(err => console.log(err));
  }

  deleteProcedure = id => {
    API.deleteProcedure(id)
      .then(res => this.loadProcedures())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Jumbotron title="Procedures List"></Jumbotron>
          {this.state.procedures.length ? (
            <List>
              {this.state.procedures.map(procedure => (
                <ListItem key={procedure._id}>
                  <Link to={"/procedure/" + procedure._id}>
                    <strong>
                      {procedure.name} performed in {procedure.location}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteProcedure(procedure._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

export default ProceduresExamsView;