import React, { Component } from "react";
import axios from "axios";

class ProductDetails extends Component {
  state = {
    data: null,
    selectedImg: "",
    selectedIndex: -1,
    categoryProducts: [],
  };

  getProductDetails = async () => {
    await axios
      .get(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" +
          this.props.match.params.id
      )
      .then((res) => {
        console.log("Single Product: ", res.data);
        this.setState({ data: res.data, selectedImg: res.data.preview });
      })
      .catch((err) => console.log(err));
  };
  componentWillMount() {
    this.getProductDetails();
  }
  render() {
    return (
      this.state.data && (
        <div className="container-lg pt-5 my-5">
          <div className="row">
            <div className="col-md-4 col-sm-10">
              <div className="d-flex justify-content-center">
                <img
                  src={this.state.selectedImg}
                  className="w-100"
                  alt="previewimg"
                />
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="d-flex flex-column">
                <h1 className="display-4 mb-2">{this.state.data.name}</h1>
                <h3
                  style={{
                    fontSize: "24px",
                  }}
                >
                  {this.state.brand}
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                  className="mb-4 text-danger"
                >
                  Amount: ${this.state.data.price}
                </p>
                <h3
                  style={{
                    fontSize: "24px",
                  }}
                >
                  Description:{" "}
                </h3>
                <p
                  style={{
                    //fontSize: "24px"
                    color: "gray",
                  }}
                  className="mb-4"
                >
                  {this.state.data.description}
                </p>
                <h3>Product Preview</h3>
                <div className="d-flex flex-row">
                  {this.state.data.photos.map((photo, index) => (
                    <img
                      src={photo}
                      alt="smallimg"
                      style={{
                        height: "70px",
                        width: "70px",
                        borderRadius: "10px",
                        border:
                          this.state.selectedIndex === index
                            ? "2px solid gray"
                            : "white",
                        padding:
                          this.state.selectedIndex === index ? "3px" : "0px",
                      }}
                      className="mx-2"
                      onClick={() =>
                        this.setState({
                          selectedImg: photo,
                          selectedIndex: index,
                        })
                      }
                    />
                  ))}
                </div>
                <div className="my-4">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <h1>People who bought this also bought</h1>
          </div>
        </div>
      )
    );
  }
}

export default ProductDetails;
