import React from "react";

const LoginBtn = props => {
  if (props.type === "signin") {
    return (
      <button className="btn btn-primary btn-lg btn-block" onClick={props.onClick}>
        Login
      </button>
    );
  } else {
    return (
      <button className="btn btn-secondary btn-lg btn-block" onClick={props.onClick}>
        Sign Up
      </button>
    );
  }
};

export default LoginBtn;