import { Button, Rating } from "@mui/material";
import React, { useContext } from "react";
import { TfiFullscreen } from "react-icons/tfi";
import { IoHeartOutline } from "react-icons/io5";
import { MyContext } from "../../App";
import "./index.css";

const ProductItem = (props) => {
  const context = useContext(MyContext);
  const viewProductDetail = (id) => {
    context.setIsOpenProductModal(true);
  };
  return (
    <>
      <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            className="w-100"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
            alt="imgProduct"
          />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetail(1)}>
              <TfiFullscreen />
            </Button>
            <Button>
              <IoHeartOutline />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4 className="">Werther’s Original Caramel Hard Candies</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$15.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
