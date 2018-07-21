import React from "react";
import "./style.css";
 
const SignUpBtn = () => (
  <button type="button" className="btn btn-info" onClick={( window.location = '/signup')}>Sign Up</button>
);

export default SignUpBtn;



