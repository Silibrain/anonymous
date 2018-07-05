import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("pages/home");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">HIPPOCRATES</h1>
                <h3 className="lead">
                  {" "}
                  ERP system for hospitals and healthcare organizations. Manage
                  and connect information from all core areas of your business
                  for effective decision making and business operations. Core
                  functional areas include: EMR patient system, scheduling and
                  procedures tracking, inventory management, accounting, content
                  management system (CMS) for physicians and staff, and
                  real-time data analytics.
                </h3>
                <hr />
                <Link to="/create-account" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
