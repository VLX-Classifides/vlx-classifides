import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";
import $ from "jquery";

class Header extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
  };
  componentWillMount() {
    if (this.state.user) {
      this.props.authenticate();
    }
    // $(document).ready(function () {
    //   $(".dropdown-toggle").dropdown();
    // });
  }
  render() {
    console.log(this.props);
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
              {this.state.user.role === "seller" && (
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/ads">
                    Advertisements
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/checkout" className="nav-link text-white">
                  <i class="fa fa-lg fa-shopping-cart"></i>
                </Link>
              </li>
              {!this.props.auth ? (
                <>
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
                </>
              ) : (
                <li className="nav-item mx-1 d-flex align-items-center">
                  {/* <div className="d-flex align-items-center">
                    <i
                      class="fa fa-2x my-auto text-white fa-user-circle display-6 dropdown-toggle"
                      id="dropdownMenuButton1"
                      data-toggle="dropdown"
                      style={{ cursor: "pointer" }}
                    ></i>
                    <div
                      className="dropdown-menu px-2"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <Link to="/profile">
                        <p>Profile</p>
                      </Link>
                      <div
                        onClick={this.toggleLogout}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <p>Logout</p>
                      </div>
                    </div>
                  </div> */}
                  <Link
                    to="/logout"
                    className="nav-link font-weight-bold btn bg-white text-primary px-5"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.authUser,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    authenticate: () =>
      dispatch({ type: actionTypes.AUTHENTICATE, data: true }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
