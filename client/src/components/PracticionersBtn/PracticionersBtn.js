import React from "react";
import "./PracticionersBtn.css";

const PracticionersBtn = props => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/practicioners')}>Practiciones</button>
);

export default PracticionersBtn