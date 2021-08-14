import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

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
      </div>
    );
  }
}

export default Home;
