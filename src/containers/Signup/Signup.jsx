import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "",
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
          className="my-auto mx-auto d-flex flex-column justify-content-around bg-light py-2"
          style={{
            width: "35vw",
            height: "500px",
            borderRadius: "30px",
          }}
        >
          <p className="lead text-center">Create a VLX Account</p>
          <div className="d-flex flex-column w-75 mx-auto justify-content-around">
            <input
              type="text"
              className="form-control py-2 px-3 my-1"
              placeholder="Full Name"
              style={{
                borderRadius: "20px",
                fontSize: "20px",
              }}
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="text"
              className="form-control py-2 px-3 my-1"
              placeholder="UserName"
              style={{
                borderRadius: "20px",
                fontSize: "20px",
              }}
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <input
              type="text"
              className="form-control py-2 px-3 my-1"
              placeholder="E-mail"
              style={{
                borderRadius: "20px",
                fontSize: "20px",
              }}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              type="text"
              className="form-control py-2 px-3 my-1"
              placeholder="Password"
              style={{
                borderRadius: "20px",
                fontSize: "20px",
              }}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <input
              type="text"
              className="form-control py-2 px-3 my-1"
              placeholder="Confirm Password"
              style={{
                borderRadius: "20px",
                fontSize: "20px",
              }}
              value={this.state.cpassword}
              onChange={(e) => this.setState({ cpassword: e.target.value })}
            />
            <select
              className="form-control py-2 px-3 mt-1 mb-4"
              onChange={(e) => this.setState({ role: e.target.value })}
              style={{
                borderRadius: "20px",
                fontSize: "20px",
              }}
              placeholder="Select Role"
            >
              <option value="" disabled selected>
                Select Role
              </option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary w-50 btn-lg">Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
