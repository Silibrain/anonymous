import React from "react";
import "./style.css";

export const Wrapper = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

export default Wrapper