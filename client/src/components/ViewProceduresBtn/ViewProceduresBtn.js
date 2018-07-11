import React from "react";
import "./ViewProceduresBtn.css";

const ViewProceduresBtn = props => (
<button type="button" className="btn btn-outline-info" onClick={( window.location = '/procedures/view')}>View</button>
);

export default ViewProceduresBtn
    