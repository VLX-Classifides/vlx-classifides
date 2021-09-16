import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import api from "../../../routes/api";
import { toast } from "react-toastify"; 
class PendingProductDetails extends Component {
  state = {
    data: null,
    msg:""
  };

approveProduct =(e)=>
{
    const url =api.developmentServer + "/approveProduct/" + this.props.match.params.id;
    e.preventDefault();
    axios.put(url).then(res=>{
        console.log(res)
        this.setState({msg:res.data.message})
        toast.success(this.state.msg)
        this.props.history.push("/home")
    })
}
rejectProduct =(e)=>
{
    const url =api.developmentServer + "/rejectProduct/" + this.props.match.params.id;
    e.preventDefault();
    axios.delete(url).then(res=>{
        this.setState({msg:res.data.message})
        toast.success(this.state.msg)
        this.props.history.push("/home")
    })
    this.props.history.push("/home")
}
  getProductDetails = async () => {
    //const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + this.props.match.params.id;
    const url =
      api.developmentServer + "/api/product/" + this.props.match.params.id;
    await axios
      .get(url)
      .then((res) => {
        console.log("Single Product: ", res.data);
        this.setState({ data: res.data.result });
        let blob = new Blob([new Uint8Array(res.data.result.image)], {
          type: "image/jpeg",
        });
        let imageUrl = URL.createObjectURL(blob);
        this.setState({ selectedImg: imageUrl });
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
                  {this.state.data.brand}
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
                  Description:<h5>{this.state.data.descr}</h5>
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
                {/* <h3>Product Preview</h3>
                <div className="d-flex flex-row">
                  {this.state.data.photos.map((photo, index) => (
                    <img
                      src={photo}
                      key={"previewimg" + index}
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
                </div> */}
                <div className="my-4">
                  <button
                    className="btn btn-danger"
                    onClick={this.rejectProduct}
                  >
                    Reject
                  </button>{" "}
                  <button
                    className="btn btn-primary"
                    onClick={this.approveProduct}
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default PendingProductDetails;
