import { Button, Dialog, Rating } from "@mui/material";
import React, { useContext, useRef } from "react";
import { MdClose, MdOutlineCompareArrows } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Đảm bảo bạn đã import CSS của slick carousel
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { MyContext } from "../../App";
import "./index.css";
const ProductModal = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const context = useContext(MyContext);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto = (index) => {
    // Kiểm tra xem ref có sẵn không trước khi gọi slickGoTo
    if (zoomSlider.current && zoomSliderBig.current) {
      zoomSlider.current.slickGoTo(index); // Điều hướng slider nhỏ
      zoomSliderBig.current.slickGoTo(index); // Điều hướng slider lớn
    } else {
      console.error("Slick slider references are not set correctly");
    }
  };

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
          <span>Brans:</span>
          <span className="ml-2">Welch's</span>
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
      <div className="row mt-2 productDetaileModal">
        <div className="col-md-5">
          <div className="productZoom position-relative">
            <div className="badge badge-primary">23%</div>
            <Slider
              {...settings2}
              className="zoomSliderBig"
              ref={zoomSliderBig}
            >
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={2}
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                />
              </div>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={2}
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                />
              </div>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={2}
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                />
              </div>
            </Slider>
          </div>
          <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
            <img
              className="w-100"
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
              alt=""
              onClick={() => goto(0)}
            />
            <img
              className="w-100"
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
              alt=""
              onClick={() => goto(1)}
            />
            <img
              className="w-100"
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
              alt=""
              onClick={() => goto(2)}
            />
          </Slider>
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
            <div className="quantityDrop d-flex align-items-center">
              <Button>
                <FaMinus />
              </Button>
              <input type="text" value="1"></input>
              <Button>
                <FaPlus />
              </Button>
            </div>
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
