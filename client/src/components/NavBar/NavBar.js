import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Hippocrates
    </a>
    <a className="navbar-brand" href="/patients">
      Patients
    </a>
    <a className="navbar-brand" href="/practicioners">
      Practicioners
    </a>
    <a className="navbar-brand" href="/staff">
      Administration
    </a>
    <a className="navbar-brand" href="/procedures">
      Procedures and Exams
    </a>
    <a className="navbar-brand" href="/inventory">
      Inventory
    </a>
  </nav>
);

export default Nav;
