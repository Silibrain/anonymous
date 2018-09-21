import React from "react";
import "./style.css";

const button = props => (
  <button className="btn" onClick={props.clicked}>
    {props.title}
  </button>
);

export default button;
