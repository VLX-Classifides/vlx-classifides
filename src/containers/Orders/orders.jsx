import React, { Component } from "react";
// import {
//   Accordion,
//   Card,
//   CardHeader,
//   Avatar,
//   CardTitle,
//   CardSubtitle,
//   CardContent,
// } from "@mobiscroll/react-lite";
import { Collapse, CardBody, Card } from "reactstrap";
//import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import api from "../../routes/api";
import axios from "axios";
import Products from "./Products/Products";

class Orders extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
    opened: [],
    orders: [],
  };
  getAllOrders = async () => {
    const url = api.developmentServer + "/api/orders/" + this.state.user.id;
    await axios.get(url).then((res) => {
      console.log("Orders: ", res.data);
      if (res.data.responseType) {
        this.setState({
          orders: res.data.results,
          opened: res.data.results.map((o) => false),
        });
      }
    });
  };
  toggle = (index) => {
    const opened = this.state.opened;
    opened[index] = !opened[index];
    this.setState({ opened: opened });
  };
  componentWillMount() {
    if (this.state.user) {
      this.getAllOrders();
    } else {
      this.props.history.replace("/login");
    }
  }
  render() {
    return (
      <div className="container-lg my-5">
        <div className="row mt-5">
          <h1 className="mt-5 mb-4">Your Orders</h1>
          <div className="col-12 my-2">
            <div
              className="d-flex flex-row px-4 py-3 justify-content-between border"
              onClick={() => this.toggle(0)}
            >
              <p className="lead">1. Order 1</p>
              <p className="lead">Price: $3000</p>
            </div>
            <Collapse isOpen={this.state.opened[0]}>
              <Card>
                <CardBody>
                  <Products products={[]} />
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="col-12">
            <div
              className="d-flex flex-row px-4 py-3 border justify-content-between"
              onClick={() => this.toggle(1)}
            >
              <p className="lead">2. Order 2</p>
              <p className="lead">Price: $599</p>
            </div>
            <Collapse isOpen={this.state.opened[1]}>
              <Card>
                <CardBody>
                  <Products products={[]} />
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
