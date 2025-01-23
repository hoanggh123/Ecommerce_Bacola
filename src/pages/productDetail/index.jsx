import React from "react";
import "./index.css";
import { Rating } from "@mui/material";
import ProductZoom from "../../component/productZoom";
import QuantityBox from "../../component/quantityBox";
const ProductDetail = () => {
  return (
    <section className="productDetails section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pl-5">
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <h1 className="hd text-capitalize">
              All Natural Italian-Style Chicken Meatballs
            </h1>
            <ul className="list list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <span className="text-light mr-2">Brans:</span>
                <span className="">Welch's</span>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <Rating
                    name="read-only"
                    value={4.5}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                  <span className="text-light cursor">1 Review</span>
                </div>
              </li>
            </ul>
            <div className="d-flex info mb-2">
              <span className="oldPrice">$20.00</span>
              <span className="netPrice text-danger">$14.00</span>
            </div>
            <span className="badge badge-success">IN STOCK</span>
            <p className="mt-2 description">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>
            <QuantityBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
