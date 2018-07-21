import React from "react";
import "./style.css";

const AddPracticionersBtn = () => (
  <button type="button" className="btn btn-info" onClick={( window.location = '/practicioner/add')}>Add</button>
);

export default AddPracticionersBtn;

    