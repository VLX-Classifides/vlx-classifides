import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
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
          className="my-auto mx-auto d-flex flex-column justify-content-around"
          style={{
            width: "30vw",
            height: "350px",
          }}
        >
          <p className="display-4 text-white">VLX Classifides</p>
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
            type="text"
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
            <button className="btn btn-success w-50 btn-lg">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
