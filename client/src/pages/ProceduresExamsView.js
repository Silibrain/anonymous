import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import ReactModal from "react-modal";

class ProceduresExamsView extends Component {
  constructor() {
    super()
    this.state = {
      procedures: [],
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

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
                  <strong onClick={this.handleOpenModal}>
                    {procedure.name} performed in {procedure.location}
                  </strong>
                  <ReactModal isOpen={this.state.showModal} contentLabel={procedure._id}>
                    <h6>Procedure Name: {procedure.name}</h6>
                    <h6>Procedure Type: {procedure.type}</h6>
                    <h6>Procedure Location: {procedure.location}</h6>
                    <h6>Procedure Result: {procedure.result}</h6>
                    <h6>Procedure Average Time: {procedure.avgtime}</h6>
                    <h6>Procedure Capital Expenditure: {procedure.capex}</h6>
                    <h6>Procedure Operational Expenditure: {procedure.opex}</h6>
                    <button onClick={this.handleCloseModal}>Close</button>
                  </ReactModal>
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