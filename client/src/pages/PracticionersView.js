import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import ReactModal from "react-modal";

class PracticionersView extends Component {
  constructor() {
    super()
    this.state = {
      practicioners: [],
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
    this.loadPracticioners();
  }

  loadPracticioners() {
    API.getPracticioner()
      .then(res => this.setState({ practicioners: res.data, name: "", specialties: "", skills: "", fees: "", bio: "" }))
      .catch(err => console.log(err));
  }

  deletePracticioner = id => {
    API.deletePracticioner(id)
      .then(res => this.loadPracticioners())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Jumbotron title="Practicioners List"></Jumbotron>
          {this.state.practicioners.length ? (
            <List>
              {this.state.practicioners.map(practicioner => (
                <ListItem key={practicioner._id}>
                  <strong onClick={this.handleOpenModal}>
                    {practicioner.name} , {practicioner.specialties}
                  </strong>
                  <ReactModal isOpen={this.state.showModal} contentLabel={practicioner._id}>
                    <h6>Practicioner Name: {practicioner.name}</h6>
                    <h6>Practicioner Specialties: {practicioner.specialties}</h6>
                    <h6>Practicioner Skills: {practicioner.skills}</h6>
                    <h6>Practicioner Fees: {practicioner.fees}</h6>
                    <h6>Practicioner Bio: {practicioner.bio}</h6>
                    <button onClick={this.handleCloseModal}>Close</button>
                  </ReactModal>
                  <DeleteBtn onClick={() => this.deletePracticioner(practicioner._id)} />
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
export default PracticionersView;