import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import banner5 from "../../assets/images/banner5.jpg";
import "./index.css";
const Sidebar = () => {
  const [value, setValue] = useState([100, 6000]);
  return (
    <>
      <div className="sidebar false">
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox defaultChecked />}
                  label="Herbs & Seasonings"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox defaultChecked />}
                  label="Herbs & Seasonings"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="filterBox filterPrice">
          <h6>Filter by price</h6>
          <RangeSlider
            className="w-75"
            value={value}
            onInput={setValue}
            min={100}
            max={60000}
            step={5}
          />
          <div className="d-flex pt-2 pb-2 priceRange">
            <span className="priceLabel">
              From:{" "}
              <strong className="text-success">
                Rs: {value[0]}-{value[1]}
              </strong>{" "}
            </span>
          </div>
        </div>
        <div className="filterBox filterStatus">
          <h6>Product Status</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox defaultChecked />}
                  label="In Stock"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox defaultChecked />}
                  label="On Sale"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="filterBox filterBrands">
          <h6>Brands </h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox defaultChecked />}
                  label="In Stock"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox defaultChecked />}
                  label="On Sale"
                />
              </li>
            </ul>
          </div>
        </div>
        <br />
        <Link to="#">
          <img src={banner5} alt="banner" className="w-100"></img>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
