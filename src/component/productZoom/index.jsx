import React, { useRef } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick'
import './index.css'
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
        // Kiểm tra xem ref có sẵn không trước khi gọi slickGoTo
        if (zoomSlider.current && zoomSliderBig.current) {
          zoomSlider.current.slickGoTo(index); // Điều hướng slider nhỏ
          zoomSliderBig.current.slickGoTo(index); // Điều hướng slider lớn
        } else {
          console.error("Slick slider references are not set correctly");
        }
      };
    
  return (
    <>
  
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
          </>
  )
}

export default ProductZoom