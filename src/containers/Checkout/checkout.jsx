import React, { Component } from "react";
import Products from "./Products/Products";

class Checkout extends Component {
  state = {};
  render() {
    return (
      <div className="pt-5 my-5 container-lg">
        <div>
          <p className="display-4 text-start">Checkout</p>
          <p className="lead text-start">Total Items: 2</p>
        </div>
        <div className="row">
          <div className="col-md-7">
            <Products start={0} end={5} />
          </div>
          <div className="col-md-5">
            <div
              className="my-2 px-3 py-3"
              style={{
                backgroundColor: "#F5F5F5",
                height: "200px",
              }}
            >
              <p
                className="my-3"
                style={{
                  fontSize: "28px",
                }}
              >
                Order Summary
              </p>
              <p
                className="my-3"
                style={{
                  fontSize: "20px",
                }}
              >
                Amount: $2599
              </p>
              <button className="btn btn-success">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
