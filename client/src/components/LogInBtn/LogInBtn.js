import React from "react";
 
const LogInBtn = () => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/signin')}>Log In</button>
);

export default LogInBtn;

