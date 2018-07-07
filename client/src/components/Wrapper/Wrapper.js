import React from "react";

export const Wrapper = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
);

export default Wrapper;
