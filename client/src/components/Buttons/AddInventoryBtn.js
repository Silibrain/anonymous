import React from "react";
import "./style.css";

const AddInventoryBtn = () => (
  <button type="button" className="btn btn-info" onClick={( window.location = '/inventory/add')}>Add</button>
);

export default AddInventoryBtn;


