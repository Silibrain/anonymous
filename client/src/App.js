import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import helpers from "./utils/helpers.js";
import { Home, InventoryAdd, InventoryView, LogIn,NoMatch, PatientsAdd, PatientsView, PracticionersAdd, PracticionersView, ProceduresAdd, ProceduresExamsView} from "./pages";



class App extends Component {
  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {};
  }

  componentDidMount() {
    var t = this;
    helpers.getStatus(t);
  }

  render() {
    var isLoggedIn = document.cookie.length > 0;
    console.log("\n#####isLoggedIn", isLoggedIn, this.state.status);

    if (this.state.status === false) {
      return (
        <Router>
          <Switch>
            <Route path="*" component={LogIn} />
          </Switch>
        </Router>
      );
    }
//Merge All Pages into one Folder and Update All References
    return (
      <div className="app">
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={LogIn} />
        <Route exact path="/signup" component={LogIn} />
        {/* <Route exact path="/update" component={UpdateAccount} /> */}

        <Route exact path="/home" component={Home} />

        <Route exact path="/patient/add" component={PatientsAdd} />
        <Route exact path="/practicioner/add" component={PracticionersAdd} />
        <Route exact path="/inventory/add" component={InventoryAdd} />
        <Route exact path="/procedure/add" component={ProceduresAdd} />

        <Route exact path="/patient/view" component={PatientsView} />
        <Route exact path="/practicioner/view" component={PracticionersView} />
        <Route exact path="/inventory/view" component={InventoryView} />
        <Route exact path="/procedure/view" component={ProceduresExamsView} />

        {/* <Route exact path="/staff/reports" component={ReportsMenu} /> */}

        <Route component={NoMatch} />
     
      </Switch>
  </Router>
  </div>
    );
  }
}

export default App;