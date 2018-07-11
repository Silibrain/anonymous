import React, { Component } from "react";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";


import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import CreateAccount from "./pages/CreateAccount";

import Menu from "./pages/Menu";
import PatientsMenu from "./pages/PatientsMenu";
import PracticionersMenu from "./pages/PracticionersMenu";
import InventoryMenu from "./pages/InventoryMenu";
import ProceduresExamsMenu from "./pages/ProceduresExamsMenu";
import StaffAdministrationMenu from "./pages/StaffAdministrationMenu";

import PatientsAdd from "./pages/PatientsAdd";
import PracticionersAdd from "./pages/PracticionersAdd";
import InventoryAdd from "./pages/InventoryAdd";
import ProceduresAdd from "./pages/ProceduresAdd";

import PatientsView from "./pages/PatientsView";
import PracticionersView from "./pages/PracticionersView";
import InventoryView from "./pages/InventoryView";
import ProceduresView from "./pages/ProceduresExamsView";

// import PatientsDetail from "./pages/PatientDetail";
// import PracticionersDetail from "./pages/PracticionersDetail";
// import InventoryDetail from "./pages/InventoryDetail";
// import ProceduresDetail from "./pages/ProceduresDetail";

import ReportsMenu from "./pages/ReportsMenu";
import ReportsDisplay from "./pages/ReportsDisplay";

import StatisticsMenu from "./pages/StatisticsMenu";

import helpers from "./utils/helpers.js";

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
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      );
    }

    return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={LogIn} />
        <Route exact path="/signup" component={CreateAccount} />

        <Route exact path="/menu" component={Menu} />
        <Route exact path="/patients" component={PatientsMenu} />
        <Route exact path="/practicioners" component={PracticionersMenu} />
        <Route exact path="/inventory" component={InventoryMenu} />
        <Route exact path="/procedures" component={ProceduresExamsMenu} />
        <Route exact path="/staff" component={StaffAdministrationMenu} />

        <Route exact path="/patients/add" component={PatientsAdd} />
        <Route exact path="/practicioners/add" component={PracticionersAdd} />
        <Route exact path="/inventory/add" component={InventoryAdd} />
        <Route exact path="/procedures/add" component={ProceduresAdd} />

        <Route exact path="/patients/view" component={PatientsView} />
        <Route exact path="/practicioners/view" component={PracticionersView} />
        <Route exact path="/inventory/view" component={InventoryView} />
        <Route exact path="/procedures/view" component={ProceduresView} />

        {/* <Route exact path="/patients/view/:id" component={PatientsDetail} />
        <Route exact path="/practicioners/view/:id" component={PracticionersDetail} />
        <Route exact path="/inventory/view/:id" component={InventoryDetail} />
        <Route exact path="/procedures/view/:id" component={ProceduresDetail} /> */}

        <Route exact path="/staff/reports" component={ReportsMenu} />
        <Route exact path="/staff/reports/display" component={ReportsDisplay} />

        <Route exact path="/staff/graphs" component={StatisticsMenu} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;