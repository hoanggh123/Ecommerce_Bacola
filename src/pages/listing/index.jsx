import React, { useState } from "react";
import Sidebar from "../../component/sidebar";
import banner6 from "../../assets/images/banner6.jpg";
import { BsGridFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import "./index.css";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import ProductItem from "../../component/productItem";
const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                    <IoMdMenu className={productView ==='one' && 'act'} onClick={() => setProductView("one")} />
                  </Button>
                  <Button>
                    <BsGridFill className={productView ==='two' && 'act'} onClick={() => setProductView("two")} />
                  </Button>
                  <Button>
                    <CgMenuGridO className={productView ==='three' && 'act'} onClick={() => setProductView("three")} />
                  </Button>
                  <Button>
                    <TfiLayoutGrid4Alt className={productView ==='four' && 'act'} onClick={() => setProductView("four")} />
                  </Button>
                </div>
                <div className="showByFilter d-flex">
                  <div className="d-flex align-items-center showByFilterItem">
                    <span>
                      <Button>
                        Sort by latest
                        <FaAngleDown />
                      </Button>
                    </span>
                  </div>
                  <div className="d-flex align-items-center showByFilterItem">
                    <span className="showByFilterText">
                      Show
                      <Button id="basic-button" onClick={handleClick}>
                        12
                        <FaAngleDown />
                      </Button>
                    </span>
                    <Menu
                      className="showByFilterMenu"
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openDropDown}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>12</MenuItem>
                      <MenuItem onClick={handleClose}>24</MenuItem>
                      <MenuItem onClick={handleClose}>36</MenuItem>
                      <MenuItem onClick={handleClose}>48</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="productListingView">
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
              </div>
              <div className="mt-5 d-flex align-items-center justify-content-center">
                <Pagination
                  count={10}
                  sx={{
                    "& .Mui-selected": {
                      background: "#1565c0 !important",
                      border: "none !important",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
