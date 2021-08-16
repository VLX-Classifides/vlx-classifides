import React, { Component } from "react";
import CreateAdModal from "./CreateAdModal/CreateAdModal";

class Advertisements extends Component {
  state = {
    user: null,
    ads: [],
    createModal: false,
  };

  toggleCreateModal = () => {
    this.setState((pS, props) => {
      return {
        createModal: !pS.createModal,
      };
    });
  };

  getAdvertisements = async () => {};
  componentWillMount() {
    this.getAdvertisements();
  }
  render() {
    return (
      <div className="container-lg pt-5 my-5">
        <div className="row">
          <div className="d-flex justify-content-start">
            <button className="btn btn-lg btn-info">Your Advertisements</button>
          </div>
        </div>
        <div className="row my-2">
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-lg btn-dark"
              onClick={this.toggleCreateModal}
            >
              + Add Advertisement
            </button>
          </div>
        </div>
        <div className="row my-5">
          {this.state.ads.length > 0 ? (
            <p className="display-4">ADS</p>
          ) : (
            <p className="display-3">No ads placed yet</p>
          )}
        </div>
        <CreateAdModal
          show={this.state.createModal}
          toggle={this.toggleCreateModal}
        />
      </div>
    );
  }
}

export default Advertisements;
