import React from "react";
import "./ViewPracticionersBtn.css";

const ViewPracticionersBtn = props => (
<button type="button" className="btn btn-outline-info" onClick={( window.location = '/practicioners/view')}>View</button>
);

export default ViewPracticionersBtn

    