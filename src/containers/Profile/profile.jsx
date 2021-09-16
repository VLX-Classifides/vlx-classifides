import React, { Component } from "react";

class Profile extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
  };
  componentWillMount() {
    if (!this.state.user) {
      this.props.history.replace("/login");
    }
  }
  render() {
    return (
      this.state.user && (
        <div className="container my-5">
          {/* <div className="row my-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>
        </div> */}
          <div className="row mt-5 px-2">
            <div className="col-md-6 bg-white mt-5 text-center">
              <div className="d-flex flex-column my-3 mx-1">
                <div>
                  {this.state.user.primemember ? (
                    <img className="w-100" src="/membercard.png" />
                  ) : (
                    <img
                      className="w-100"
                      src="/membercard.png"
                      style={{
                        filter: "blur(10px)",
                      }}
                    />
                  )}
                  {!this.state.primemember && (
                    <p className="lead mt-3">
                      Become a member{" "}
                      <span
                        className="text-primary"
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        here
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="d-flex flex-column ml-1 bg-white">
                <h1
                  className="mx-2"
                  style={{
                    fontSize: "48px",
                  }}
                >
                  <ins>Profile</ins>
                </h1>
                <div className="d-flex flex-row mx-2 border-bottom my-2 align-items-center">
                  <div className="col-3">
                    <p className="fs-24">Name</p>
                  </div>
                  <div className="col-9">
                    <p className="fs-20">{this.state.user.username}</p>
                  </div>
                </div>
                <div className="d-flex flex-row mx-2 border-bottom my-2 align-items-center">
                  <div className="col-3">
                    <p className="fs-24">Email</p>
                  </div>
                  <div className="col-9">
                    <p className="fs-20">{this.state.user.email}</p>
                  </div>
                </div>
                <div className="d-flex flex-row mx-2 border-bottom my-2 align-items-center">
                  <div className="col-3">
                    <p className="fs-24">Member</p>
                  </div>
                  <div className="col-9">
                    <p className="fs-20">
                      {this.state.user.primemember ? "Prime" : "General"}
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row mx-2 border-bottom my-2 align-items-center">
                  <div className="col-3">
                    <p className="fs-24">Mobile</p>
                  </div>
                  <div className="col-9">
                    <p className="fs-20">{this.state.user.contact}</p>
                  </div>
                </div>
                <div className="d-flex flex-row mx-2 border-bottom my-2 align-items-center">
                  <div className="col-3">
                    <p className="fs-24">Role</p>
                  </div>
                  <div className="col-9">
                    <p className="fs-20">
                      {this.state.user.role === "admin"
                        ? "ADMIN"
                        : this.state.user.role === "buyer"
                        ? "BUYER"
                        : "SELLER"}
                    </p>
                  </div>
                </div>
                {/* <div className="d-flex flex-row mx-2 border-bottom">
                  <div className="col-3">
                    <p className="font-weight-bold">Biography</p>
                  </div>
                  <div className="col-9">
                    <p>{this.state.user.biography}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Profile;
