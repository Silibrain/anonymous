import React from "react";
import "./style.css";
import Button from "./Button/Button";

const list = (props) => (
  <div className="well" id={props.itemId}>
  <h3 className="itemName">
    <strong>{props.name}</strong>
  </h3>
  <button className="btn btn-primary"></button>
  <Button title={props} clicked={(event) => props.action(event, props.name)} />
  </div>
);

export default list;
