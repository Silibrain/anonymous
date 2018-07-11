import React from "react";
import "./ReportsBtn.css";

const ReportsBtn = props => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/staff/reports')}>Reports</button>
);

export default ReportsBtn



    