import React from "react";
import "./style.css";

const ViewPatientsBtn = () => (
<button type="button" className="btn btn-info" onClick={( window.location = '/view')}>View</button>
);

export default ViewPatientsBtn

    