import React from "react";
import createButton from "react-social-login-buttons/lib/buttons/create-button";
 
const config = {
  text: "Login with username",
  icon: "google",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};

const MyLoginButton = createButton(config);
 
export default MyLoginButton;