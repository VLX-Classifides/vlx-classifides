import React, { Component } from "react";
import CreateAdModal from "./CreateAdModal/CreateAdModal";
import axios from "axios";
import SingleProduct from "../Home/Products/SingleProduct/SingleProduct";

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

  getAdvertisements = async () => {
    await axios
      .get("http://192.168.29.226:8080/products")
      .then((res) => {
        this.setState({ ads: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  componentWillMount() {
    this.getAdvertisements();
  }
  render() {
    return (
      <div className="container-lg pt-5 my-5">
        <div className="row">
          <div className="d-flex justify-content-start">
            <h1>Your Advertisements</h1>
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
            <div className="d-flex flex-row flex-wrap">
              {this.state.ads.map((product) => (
                <SingleProduct
                  key={product.id}
                  cid={product.id}
                  ctext={product.name}
                  cbrand={product.brand}
                  cprice={product.price}
                />
              ))}
            </div>
          ) : (
            <p className="display-3">No ads placed yet</p>
          )}
        </div>
        <CreateAdModal
          show={this.state.createModal}
          toggle={this.toggleCreateModal}
          getAds={this.getAdvertisements}
        />
      </div>
    );
  }
}

export default Advertisements;
