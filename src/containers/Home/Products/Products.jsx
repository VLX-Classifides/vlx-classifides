import React, { Component } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct/SingleProduct";
import api from "../../../routes/api";

class Products extends Component {
  state = { products: [] };

  getProductsByCategory = async () => {
    const url = api.developmentServer + "/api/products/" + this.props.category;
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.responseType) {
          this.setState({ products: res.data.results });
        }
      })
      .catch((err) => console.log(err));
  };
  componentWillMount() {
    this.getProductsByCategory();
  }
  render() {
    return (
      <div className="d-flex flex-row row overflow-auto">
        {this.state.products.map((product) => (
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
