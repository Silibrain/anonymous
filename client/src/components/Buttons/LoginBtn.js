import React from "react";
import Button from "@material-ui/core/Button";

const LoginBtn = props => {
  if (props.type === "signin") {
    return (
      <button className="btn btn-lg btn-primary" onClick={props.onClick}>
        Login
      </button>
    );
  } else {
    return (
      <button className="btn btn-lg btn-primary" onClick={props.onClick}>
        Sign Up
      </button>
    );
  }
};

export default LoginBtn;
