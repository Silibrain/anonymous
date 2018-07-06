import React from "react";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/patients" component={Nav} />
        <Route exact path="/patients/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
