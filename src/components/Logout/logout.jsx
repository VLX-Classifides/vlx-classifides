import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

class Logout extends Component {
  componentDidMount() {
    this.props.unauthenticate();
    localStorage.removeItem("user");
    localStorage.removeItem("access");
    this.props.history.replace("/");
  }
  render() {
    return <div></div>;
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    unauthenticate: () =>
      dispatch({ type: actionTypes.AUTHENTICATE, data: false }),
  };
};

export default connect(null, mapDispatchtoProps)(Logout);
