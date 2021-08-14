import React from "react";

const SingleProduct = (props) => {
  return (
    <div
      className="d-flex flex-column mx-1 my-2"
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <img
        className="w-100"
        // width={250}
        // height={300}
        src={props.src}
        alt="productimg"
      />
      <p className="lead cloth-text">{props.ctext}</p>
      <p className="font-weight-bold cloth-brand">{props.cbrand}</p>
      <p className="text-danger cloth-price">Price: ${props.cprice}</p>
    </div>
  );
};

export default SingleProduct;
