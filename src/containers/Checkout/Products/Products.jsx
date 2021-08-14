import React, { Component } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct/SingleProduct";

class Products extends Component {
  state = { products: [] };
  getAllProducts = async () => {
    await axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        console.log("Products: ", res.data);
        this.setState({
          products: res.data.slice(this.props.start, this.props.end),
        });
      })
      .catch((err) => console.log(err));
  };
  componentWillMount() {
    this.getAllProducts();
  }
  render() {
    return (
      <div className="d-flex flex-column">
        {this.state.products.map((product) => (
          <SingleProduct
            key={product.id}
            src={product.preview}
            ctext={product.name}
            cbrand={product.brand}
            cprice={product.price}
          />
        ))}
      </div>
    );
  }
}

export default Products;
