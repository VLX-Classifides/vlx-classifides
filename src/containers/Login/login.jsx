import React, { Component } from "react";
import axios from "axios";
import api from "../../routes/api";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";
import jwt_decode from "jwt-decode";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  getUserData = async (token) => {
    const email = this.state.email;
    const url = api.developmentServer + "/user/details?email=" + email;
    await axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.result));
        this.props.authenticate();
        this.props.history.replace("/home");
        toast.success("Login Successful");
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch((err) => console.log(err));
  };
  login = async () => {
    const url =
      api.developmentServer +
      `/api/login?email=${this.state.email}&password=${this.state.password}`;
    // const body = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    await axios
      .post(url)
      .then((res) => {
        console.log("Log In: ", res.data);
        this.getUserData(res.data.access_token);
        localStorage.setItem("access", res.data.access_token);
        // if (res.data.responseType) {
        //   localStorage.setItem("user", JSON.stringify(res.data.result));
        //   console.log("User", res.data.result);
        //   this.props.authenticate();
        //   this.setState({
        //     email: "",
        //     password: "",
        //   });
        //   toast.success(res.data.message);
        //   this.props.history.replace("/home");
        // } else {
        //   toast.warning(res.data.message);
        // }
      })
      .catch((err) => {
        toast.warning("Wrong username/password");
      });
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
              className="btn btn-success w-75 btn-lg"
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
