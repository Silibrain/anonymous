import React from "react";
import "./style.css";

const AddpatientsBtn = () => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/patient/add')}>Add</button>
);

export default AddpatientsBtn;

