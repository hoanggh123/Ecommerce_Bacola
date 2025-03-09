import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import QuantityBox from "../../component/quantityBox";
import { Button } from "@mui/material";
const Cart = () => {
  return (
    <section className="section cartPage">
      <div className="container">
        <h2 className="hd mb-0">Your Cart</h2>
        <p>
          There are <b>3</b> products in your cart
        </p>
        <div className="row">
          <div className="col-md-8">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th width="35%">Product</th>
                    <th width="15%">Unit Price</th>
                    <th width="25%">Quantity</th>
                    <th width="15%">Subtotal</th>
                    <th width="10%">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg"
                              alt="ProductCart"
                              className="w-100"
                            />
                          </div>
                          <div className="info px-3">
                            <h6 className="mb-0">
                              {" "}
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="10%">
                      <span className="remove">
                        <IoIosClose />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg"
                              alt="ProductCart"
                              className="w-100"
                            />
                          </div>
                          <div className="info px-3">
                            <h6 className="mb-0">
                              {" "}
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="10%">
                      <span className="remove">
                        <IoIosClose />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg"
                              alt="ProductCart"
                              className="w-100"
                            />
                          </div>
                          <div className="info px-3">
                            <h6 className="mb-0">
                              {" "}
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="10%">
                      <span className="remove">
                        <IoIosClose />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg"
                              alt="ProductCart"
                              className="w-100"
                            />
                          </div>
                          <div className="info px-3">
                            <h6 className="mb-0">
                              {" "}
                              All Natural Italian-Style Chicken Meatballs
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="10%">
                      <span className="remove">
                        <IoIosClose />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3 cartDetails">
              <h4>CART TOTALS</h4>
              <div className="d-flex align-items-center mb-3">
                <span>Subtotal</span>
                <span className="ml-auto text-red font-weight-bold">
                  $12.31
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span>Shipping</span>
                <span className="ml-auto font-weight-bold">Free</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span>Estimate for</span>
                <span className="ml-auto">United Kingdom</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span>Total</span>
                <span className="ml-auto text-red font-weight-bold">
                  $12.31
                </span>
              </div>
              <br />
              <Button className="btn-blue bg-red btn-big btn-round ml-3">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
