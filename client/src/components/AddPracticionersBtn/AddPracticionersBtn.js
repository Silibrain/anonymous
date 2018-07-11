import React from "react";
import "./AddPracticionersBtn.css";

const AddPracticionersBtn = props => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/practicioners/add')}>Add</button>
);

export default AddPracticionersBtn;

    