import React, { Component } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct/SingleProduct";
import api from "../../../routes/api";

class Products extends Component {
  state = { products: [] };

  render() {
    return (
      <div className="d-flex flex-row row overflow-auto">
        {this.props.products.map((product) => (
          <div className="col-3">
            <SingleProduct
              key={product.id}
              cid={product.id}
              src={product.image}
              ctext={product.name}
              cbrand={product.brand}
              cprice={product.price}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
