import React, { Component } from "react";
import Products from "./Products/Products";
import PaymentModal from "../Payment/PaymentModal";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

class Checkout extends Component {
  state = {
    createPaymentModal: false
  };
  toggleCreatePaymentModal = () => {
    this.setState((pS, props) => {
      return {
        createPaymentModal: !pS.createPaymentModal,
      };
    });
  };
  render() {
    let totalPrice = 0;
    this.props.items.map((item) => (totalPrice += item.price - "0"));
    return (
      <div className="pt-5 my-5 container-lg">
        <div>
          <p className="display-4 text-start">Checkout</p>
          <p className="lead text-start">
            Total Items: {this.props.items.length}
          </p>
        </div>
        <div className="row">
          <div className="col-md-7">
            <Products start={0} end={5} products={this.props.items} />
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
                Amount: ${totalPrice}
              </p>
              <button className="btn btn-success" onClick={this.toggleCreatePaymentModal}>Place Order</button>
            </div>
          </div>
        </div>
        <PaymentModal show={this.state.createPaymentModal} toggle={this.toggleCreatePaymentModal} totalPrice={totalPrice}/>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    items: state.checkout.items,
  };
};

export default connect(mapStatetoProps)(Checkout);
