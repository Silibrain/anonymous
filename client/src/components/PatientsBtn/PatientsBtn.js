import React from "react";
import "./PatientsBtn.css";

const PatientsBtn = () => (
<button type="button" className="btn btn-outline-info" onClick={( window.location = '/patients')}>Patients</button>
);

export default PatientsBtn

    