import React from "react";
import "./ProceduresBtn.css";

const ProceduresBtn = props => (
<button type="button" className="btn btn-outline-info" onClick={( window.location = '/procedures')}>Procedures + Exams</button>
);

export default ProceduresBtn
    