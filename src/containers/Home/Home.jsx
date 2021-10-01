import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Products from "./Products/Products";
import PendingProducts from "./PendingProducts/PendingProducts";
import { withRouter } from "react-router";
class Home extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
  };
  render() {
    return (
      <div className="my-5 pt-5 container-lg">
        {this.state.user && this.state.user.role === "admin" ? (
          <div>
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
          <Products category="electronics" />
        </div>
        <div>
          <Products category="clothing" />
        </div>
        <div>
          <Products category="accessories" />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
