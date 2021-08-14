import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Products from "./Products/Products";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="my-5 pt-5 container-lg">
        <div
          style={{
            maxHeight: "500px",
            height: "500px",
          }}
        >
          <HomeCarousel />
        </div>
        <div>
          <h2 className="mt-5 mb-2 text-start">Clothes for Men and Women</h2>
          <Products start={0} end={5} />
        </div>
        <div>
          <h2 className="mt-5 mb-2 text-start">Accessories</h2>
          <Products start={5} end={11} />
        </div>
      </div>
    );
  }
}

export default Home;
