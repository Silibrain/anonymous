import React from "react";
import "./NavBar.css";

const Nav = () => (
    <header role="banner">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-5">
              <ul className="social list-unstyled">
                <li><a href=""><span className="fa fa-facebook"></span></a></li>
                <li><a href=""><span className="fa fa-twitter"></span></a></li>
                <li><a href=""><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-7 text-right">
              <p className="mb-0">
                <a href="" className="cta-btn" data-toggle="modal" data-target="#modalAppointment">Make an Appointment</a></p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">Hippocrates<span></span>  </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="">Institute</a>
                  <a className="dropdown-item" href="">Departments</a>
                  <a className="dropdown-item" href="services.html">Services</a>
                </div>

              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="doctors.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors</a>
                <div className="dropdown-menu" aria-labelledby="dropdown05">
                  <a className="dropdown-item" href="doctors.html">Find Doctors</a>
                  <a className="dropdown-item" href="">Practitioner</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="news.html">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
);

export default Nav;
