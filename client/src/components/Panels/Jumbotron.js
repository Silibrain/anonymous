import React from "react";
import "./style.css";
import "./images/medimg2.jpg";

const image = "./images/medimg2.jpg";

const jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className={props.image}>
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.lead}</p>
      </div>
    </div>
  </div>
);

export default jumbotron;
