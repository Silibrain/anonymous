import React from "react";
import "./List.css";
import Button from "./Button/Button";

const list = (props) => (
  <div className="well" id={props.itemId}>
  <h3 className="itemHeadline">
    <strong>{props.headline}</strong>
  </h3>
  <button className="btn btn-primary"><a href={props.URL} target="_blank">
  </a></button>
  <Button title={props.title} clicked={(event) => props.action(event, props.articleId)} />
  </div>
);

export default list;
