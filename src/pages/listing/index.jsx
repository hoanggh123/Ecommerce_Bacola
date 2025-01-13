import React from "react";
import Sidebar from "../../component/sidebar";
import banner6 from "../../assets/images/banner6.jpg";
import { BsArrowDown, BsGridFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

import "./index.css";
import { Button } from "@mui/material";
const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page pt-5">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />
            <div className="content_right">
              <img
                src={banner6}
                alt=""
                className="w-100"
                style={{ borderRadius: "8px" }}
              ></img>
              <div className="showBy d-flex  align-items-center">
                <div className="d-flex  align-items-center btnWrapper">
                  <Button>
                    <IoMdMenu />
                  </Button>
                  <Button>
                    <BsGridFill />
                  </Button>
                  <Button>
                    <CgMenuGridO />
                  </Button>
                  <Button>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>
                <div>
                  <div className="sort-by">
                    Sort by latest
                    <BsArrowDown />
                  </div>
                  <div className="show">
                    Show 12
                    <BsArrowDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
