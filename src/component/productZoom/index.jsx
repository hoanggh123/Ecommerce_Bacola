import React, { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import "./index.css";

const ProductZoom = () => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

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
    if (zoomSlider.current && zoomSliderBig.current) {
      zoomSlider.current.slickGoTo(index);
      zoomSliderBig.current.slickGoTo(index);
    } else {
      console.error("Slick slider references are not set correctly");
    }
  };

  return (
    <>
      <div className="productZoom">
        <div className="productZoom productZoomBig position-relative mb-3">
          <div className="badge badge-primary">23%</div>
          <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
              />
            </div>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
              />
            </div>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
              />
            </div>
          </Slider>
        </div>
        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
          <img
            className="w-100"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
            alt="ZoomImages"
            onClick={() => goto(0)}
          />
          <img
            className="w-100"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
            alt="ZoomImages"
            onClick={() => goto(1)}
          />
          <img
            className="w-100"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
            alt="ZoomImages"
            onClick={() => goto(2)}
          />
        </Slider>
      </div>
    </>
  );
};

export default ProductZoom;
