import React from "react";
import "./AddPatientsBtn.css";

const AddpatientsBtn = props => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/patients/add')}>Add</button>
);

export default AddpatientsBtn;

