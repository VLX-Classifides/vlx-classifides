import React, { Component } from "react";
import CreateAdModal from "./CreateAdModal/CreateAdModal";
import axios from "axios";
import SingleProduct from "./SingleProduct/SingleProduct";
import api from "../../routes/api";

class Advertisements extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
    ads: [],
    pending:[],
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
      .get(
        api.developmentServer + "/api/products-by-user/" + this.state.user.id
      )
      .then((res) => {
        console.log("Advertisements: ", res.data);
        if (res.data.responseType) {
          this.setState({ ads: res.data.results });
        }
      })
      .catch((err) => console.log(err));
  };
  
  getPendingAds()
  {
    axios.get(api.developmentServer+"/api/pendingProducts/"+this.state.user.id)
    .then((res) => {
      console.log("Pending Advertisements: ", res.data);
      if (res.data.responseType) {
        this.setState({ pending: res.data.results });
      }
    })
    .catch((err) => console.log(err));
  }
  componentWillMount() {
    this.getAdvertisements();
    this.getPendingAds();
  }
  render() {
    return (
      <div className="container-lg pt-5 my-5">
        <div className="row">
          <div className="d-flex justify-content-start">
            <h1>Your All Advertisements</h1>
          </div>
        </div>
        <div className="row my-2">
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-lg btn-dark"
              onClick={this.toggleCreateModal}
              title="Add Advertisement"
            >
              <i className="fa text-white fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="row my-5">
          {this.state.ads.length > 0 ? (
            <div className="d-flex flex-row flex-wrap row overflow-auto">
              {this.state.ads.map((product) => (
                <div className="col-3">
                  <SingleProduct
                    key={"ads" + product.id}
                    cid={product.id}
                    ctext={product.name}
                    cbrand={product.brand}
                    cprice={product.price}
                    src={product.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="display-3">No ads placed yet</p>
          )}
        </div>
        <div className="row">
          <div className="d-flex justify-content-start">
            <h1>Your Pending Advertisements</h1>
          </div>
        </div>
        <div className="row my-5">
          {this.state.pending.length > 0 ? (
            <div className="d-flex flex-row flex-wrap row overflow-auto">
              {this.state.pending.map((product) => (
                <div className="col-3">
                  <SingleProduct
                    key={"pending" + product.id}
                    cid={product.id}
                    ctext={product.name}
                    cbrand={product.brand}
                    cprice={product.price}
                    src={product.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="display-3">No pending ads</p>
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
