import React from "react";
import "./StatsBtn.css";

const StatsBtn = props => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/staff/graphs')}>Stats</button>
);

export default StatsBtn

    