import React from "react";
import "./StaffBtn.css";

const StaffBtn = props => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/staff')}>View</button>
);

export default StaffBtn
    