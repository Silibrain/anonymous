import React, { Component } from "react";
import API from "../utils/helpers";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import Jumbotron from "../components/Panels/Jumbotron";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/Buttons/DeleteBtn";

class PracticionersView extends Component {
  state = {
    practicioners: [],
    name: "",
    specialties: "",
    skills: "",
    fees: "",
    bio: ""
  };

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
                  <Link to={"/practicioner/" + practicioner._id}>
                    <strong>
                      {practicioner.name} , {practicioner.specialties}
                    </strong>
                  </Link>
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