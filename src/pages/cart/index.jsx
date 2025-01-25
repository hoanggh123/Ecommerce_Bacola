import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import QuantityBox from "../../component/quantityBox";
const Cart = () => {
  return (
    <section className="section cartPage">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="hd mb-0">Your Cart</h2>
            <p>
              There are <b>3</b> products in your cart
            </p>
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
               
              </table>
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
                </tbody>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
