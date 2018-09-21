import React from "react";
import "./style.css";

const Nav = () => (
  <header role="banner">
    <nav className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul className="social list-unstyled" />
          </div>
          <div className="col-md-6 col-sm-6 col-7 text-right">
            <p className="mb-0" />
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="./logo.png" alt="" width="100px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/view">
                    {" "}
                    View Cases{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/add">
                    {" "}
                    Add Case{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/account">
                    {" "}
                    Account{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </header>
);

export default Nav;
