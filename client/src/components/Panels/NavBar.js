import React from "react";
import "./style.css";

const Nav = () => (
    <header role="banner">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-5">
              <ul className="social list-unstyled">
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-7 text-right">
              <p className="mb-0">
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Hippocrates<span></span>  </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/patient/view" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Patients</a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="/patient/add">Add</a>
                  <a className="dropdown-item" href="/patient/view">View</a>
                </div>

              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/practicioner/view" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Practicioners</a>
                <div className="dropdown-menu" aria-labelledby="dropdown05">
                  <a className="dropdown-item" href="/practicioner/add">Add</a>
                  <a className="dropdown-item" href="/practicioner/view">View</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/inventory/view" id="dropdown06" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inventory</a>
                <div className="dropdown-menu" aria-labelledby="dropdown06">
                  <a className="dropdown-item" href="/inventory/add">Add</a>
                  <a className="dropdown-item" href="/inventory/view">View</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/procedure/view" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Procedures + Exams</a>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="/procedure/add">Add</a>
                  <a className="dropdown-item" href="/procedure/view">View</a>
                </div>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" href="/staff/reports">Administration</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
);

export default Nav;
