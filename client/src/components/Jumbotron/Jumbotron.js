import React from "react";

const jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead" />
    </div>
  </div>
);

export default jumbotron;
