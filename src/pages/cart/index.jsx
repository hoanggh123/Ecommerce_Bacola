import React from "react";
import './index.css'
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
              <div className="table">
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
                    <td>
                      <div className="d-flex align-items-center cartItemWrapper">
                        <div className="imgWrapper">
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg"
                            alt="ProductCart"
                            className="w-100"
                          />
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
