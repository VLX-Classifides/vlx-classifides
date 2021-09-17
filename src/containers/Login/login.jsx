import React, { Component } from "react";
import axios from "axios";
import api from "../../routes/api";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  login = async () => {
    const url = api.developmentServer + "/user/entry";
    const body = {
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post(url, body)
      .then((res) => {
        console.log("Log In: ", res.data);
        if (res.data.responseType) {
          localStorage.setItem("user", JSON.stringify(res.data.result));
          console.log("User", res.data.result);
          this.props.authenticate();
          this.setState({
            email: "",
            password: "",
          });
          toast.success(res.data.message);
          this.props.history.replace("/home");
        } else {
          toast.warning(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  validateEmail = (email) => {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(email);
  };
  loginValidation = () => {
    if (!this.validateEmail(this.state.email)) {
      toast.warning("Email field wrong");
    } else if (this.state.password === "") {
      toast.warning("Password field empty");
    } else {
      this.login();
    }
  };
  render() {
    return (
      <div
        className="pt-5 d-flex px-2"
        style={{
          height: "100vh",
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,113,121,1) 35%, rgba(0,212,255,1) 100%)",
          width: "100vw",
        }}
      >
        <div
          className="my-auto col-md-4 col-sm-10 mx-auto d-flex flex-column justify-content-around"
          style={{
            //width: "30vw",
            height: "350px",
          }}
        >
          <p className="display-4 text-white text-center">VLX Classifides</p>
          <input
            type="text"
            className="form-control p-3"
            placeholder="E-mail"
            style={{
              borderRadius: "20px",
              fontSize: "24px",
            }}
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            className="form-control p-3 mb-4"
            placeholder="Password"
            style={{
              borderRadius: "20px",
              fontSize: "24px",
            }}
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success w-100 btn-lg"
              onClick={this.loginValidation}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    authenticate: () =>
      dispatch({ type: actionTypes.AUTHENTICATE, data: true }),
  };
};

export default connect(null, mapDispatchtoProps)(Login);
