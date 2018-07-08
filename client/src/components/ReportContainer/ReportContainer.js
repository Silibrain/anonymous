import React from "react";

export const ReportsContainer = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

export default ReportsContainer