import React from "react";
import "./style.css";

const ViewProceduresBtn = () => (
<button type="button" className="btn btn-info" onClick={( window.location = '/procedure/view')}>View</button>
);

export default ViewProceduresBtn
    