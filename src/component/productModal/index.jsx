import { Button, Dialog, Rating } from "@mui/material";
import React, { useContext } from "react";
import { MdClose, MdOutlineCompareArrows } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Đảm bảo bạn đã import CSS của slick carousel
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { IoIosHeartEmpty } from "react-icons/io";
import { MyContext } from "../../App";
import "./index.css";
import QuantityBox from "../quantityBox";
import ProductZoom from "../productZoom";
const ProductModal = () => {
  const context = useContext(MyContext);
  return (
    <Dialog
      open={true}
      className="productModal"
      onClose={() => context.setIsOpenProductModal(false)}
    >
      <Button
        onClick={() => context.setIsOpenProductModal(false)}
        className="close_"
      >
        <MdClose />
      </Button>
      <h4>All Natural Italian-Style Chicken Meatballs</h4>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-4">
          <span className="ml-2">Brans:</span>
          <span className="">Welch's</span>
          <Rating
            name="read-only"
            className="ml-2"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />
        <br />
        <br />
        <br />
      </div>
      <div className="row mt-2 productDetailModal">
        <div className="col-md-5">
         <ProductZoom/>
        </div>
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3">
            <span className="oldPrice lg mr-2">$9.35</span>
            <span className="netPrice text-danger lg">$7.25</span>
          </div>
          <span className="badge bg-success">IN STOCK</span>
          <p className="mt-3">
            Rs: Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.ac
          </p>
          <div className="productSize d-flex align-items-center">
            <span>Size:</span>
            <ul className="list list-inline mb-0 pl-4 false">
              <li className="list-inline-item">
                <a className="tag " href="/">
                  Xs
                </a>
              </li>
              <li className="list-inline-item">
                <a className="tag " href="/">
                  S
                </a>
              </li>
              <li className="list-inline-item">
                <a className="tag " href="/">
                  Xl
                </a>
              </li>
              <li className="list-inline-item">
                <a className="tag " href="/">
                  XS
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center actions_">
            <QuantityBox />
            <Button className="btn-blue bg-red btn-lg btn-big btn-round ml-3">
              Add to cart
            </Button>
          </div>
          <div className="d-flex align-items-center mt-5 actions">
            <Button className="btn-round btn-sml">
              <IoIosHeartEmpty className="text-danger" /> &nbsp; ADDED TO
              WISHLIST
            </Button>
            <Button className="btn-round btn-sml ml-3">
              <MdOutlineCompareArrows className="" />
              &nbsp; COMPARE
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
