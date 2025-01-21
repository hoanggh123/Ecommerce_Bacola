import React from "react";
import "./index.css";
import { Rating } from "@mui/material";
import ProductZoom from "../../component/productZoom";
const ProductDetail = () => {
  return (
    <section className="productDetails section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
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
                  <span className="text-light cursor ml-2">1 Review</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
