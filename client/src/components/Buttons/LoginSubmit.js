import React from "react";

const LoginSubmit = props => {
  if (props.type === "signin") {
    return (
      <button className="btn btn-info" onClick={props.onClick}>
        Login
      </button>
    );
  } else if (props.type === "signup") {
    return (
      <button className="btn btn-info" onClick={props.onClick}>
        Sign Up
      </button>
    );
  }
};

export default LoginSubmit;