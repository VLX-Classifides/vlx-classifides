import axios from "axios";
import React, { Component } from "react";
import api from "../../../routes/api";
export class UserDetails extends Component {
  state = {
    crntuser: JSON.parse(localStorage.getItem("user")),
    user: "",
  };
  componentDidMount() {
    axios
      .get(api.developmentServer + "/user/" + this.props.match.params.id, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      })
      .then((res) => {
        this.setState({ user: res.data.result });
        console.log(this.state.user);
      });
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        {this.state.crntuser && this.state.crntuser.role === "admin" ? (
          <div>
            <h1 className="text-center">User Details</h1>
            <br />
            <br />
            <div className="row text-center">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <h3 className="col text-primary">Name :</h3>
                    </td>
                    <td>
                      <h4 className="col-5">{this.state.user.username}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3 className="col text-primary">Email :</h3>
                    </td>
                    <td>
                      <h4 className="col-5">{this.state.user.email}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3 className="col text-primary">Contact No :</h3>
                    </td>
                    <td>
                      <h4 className="col-5">{this.state.user.contact}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3 className="col text-primary">Address :</h3>
                    </td>
                    <td>
                      <h4 className="col-5">{this.state.user.address}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3 className="col text-primary">Primember :</h3>
                    </td>
                    <td>
                      <h4 className="col-5">
                        {this.state.user.primemember ? "Yes" : "No"}
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3 className="col text-primary">Role :</h3>
                    </td>
                    <td>
                      <h4 className="col-5">{this.state.user.role}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3 className="col text-primary">Account Detail :</h3>
                    </td>
                    <td>
                      <h4 className="col-5">
                        {this.state.user.acdetail
                          ? this.state.user.acdetail
                          : "None"}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1 className="text-center">Not authorised</h1>
        )}
      </div>
    );
  }
}

export default UserDetails;
