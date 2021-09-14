import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const PendingSingleProduct = (props) => {
  return (
    <div
      className="d-flex flex-column mx-1 my-2"
      style={{
        backgroundColor: "lightgray",
        minWidth: "19%",
        cursor: "pointer",
      }}
      onClick={() => props.history.push("/pendingproduct/" + props.cid)}
    >
      {props.src !== undefined ? (
        <img
          className="w-100"
          // width={250}
          // height={300}
          src={props.src}
          alt="productimg"
        />
      ) : null}
      <p className="lead cloth-text px-2">{props.ctext}</p>
      <p className="font-weight-bold cloth-brand px-2">{props.cbrand}</p>
      <p className="text-danger cloth-price px-2">Price: ${props.cprice}</p>
    </div>
  );
};

export default withRouter(PendingSingleProduct);
