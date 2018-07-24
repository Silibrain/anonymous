import React from "react";
import "./style.css";

const AddpatientsBtn = () => (
  <button type="button" className="btn btn-info" onClick={( window.location = '/patient/add')}>Add</button>
);

export default AddpatientsBtn;

