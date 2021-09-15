import React, { Component } from "react";
import axios from "axios";
import PendingSingleProduct from "./PendingSingleProduct";
import api from "../../../routes/api";

class PendingProducts extends Component {
  state = { products: [] };
  getPendingProducts = async () => {
    await axios
      .get(api.developmentServer + "/pendingProducts")
      .then((res) => {
        console.log("Products: ", res.data);
        this.setState({
          products: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
  componentWillMount() {
    this.getPendingProducts();
  }
  render() {
    return (
      <div className="d-flex flex-row overflow-scroll">
        {this.state.products.map((product) => (
          <PendingSingleProduct
            key={product.id}
            cid={product.id}
            ctext={product.name}
            cbrand={product.brand}
            cprice={product.price}
          />
        ))}
      </div>
    );
  }
}

export default PendingProducts;
