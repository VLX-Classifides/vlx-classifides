import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Products from "./Products/Products";
import PendingProducts from "./PendingProducts/PendingProducts";
class Home extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
  };
  render() {
    return (
      <div className="my-5 pt-5 container-lg">
        {this.state.user && this.state.user.role === "admin" ? (
          <div>
            <h3> Products to be approved</h3>
            <PendingProducts />
          </div>
        ) : (
          <div
            style={{
              maxHeight: "500px",
              height: "500px",
            }}
          >
            <HomeCarousel />
          </div>
        )}
        <div>
          <h2 className="mt-5 mb-2 text-start">Electronic Appliances</h2>
          <Products category="electronics" />
        </div>
        <div>
          <h2 className="mt-5 mb-2 text-start">Clothes for Men and Women</h2>
          <Products category="clothing" />
        </div>
        <div>
          <h2 className="mt-5 mb-2 text-start">Home Accessories</h2>
          <Products category="accessories" />
        </div>
      </div>
    );
  }
}

export default Home;
