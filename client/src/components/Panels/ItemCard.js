import React from "react";
import "./style.css";

const ItemCard = props => (

<div className="card">
  <h5 className="card-header"></h5>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
  </div>
</div>

);

export default ItemCard