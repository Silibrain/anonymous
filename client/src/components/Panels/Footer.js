import React from "react";
import "./style.css";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Roberto Baldizon, Alexandra Goodwin, Jose Salamanca, Connor Barnett
    </footer>
  );
};
