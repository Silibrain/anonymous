import React from "react";
import "./style.css";

export const ReportsContainer = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

export default ReportsContainer