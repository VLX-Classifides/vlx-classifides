import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark fixed-top"
        style={{
          backgroundColor: "#3C5186",
        }}
      >
        <div className="container">
          <p className="navbar-brand mb-0 font-weight-bold text-white">
            VLX Classifides
          </p>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarNav"
            className="collapse navbar-collapse d-flex justify-content-end"
          >
            <ul className="navbar-nav" id="navbarNav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/home">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-white" href="/analytics">
                  Analytics
                </a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link text-white" to="/ads">
                  Advertisements
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/checkout" className="nav-link text-white">
                  <i class="fa fa-lg fa-shopping-cart"></i>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  to="/signup"
                  className="nav-link text-white font-weight-bold"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  to="/login"
                  className="nav-link font-weight-bold btn bg-white text-primary px-5"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
