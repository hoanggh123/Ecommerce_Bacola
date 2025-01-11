import { Button } from "@mui/material";
import React from "react";
import "./index.css";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeOutline, IoFastFoodOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import {
  MdOutlineContactPhone,
  MdOutlineBakeryDining,
  MdOutlineEmojiFoodBeverage,
} from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab">
              <span className="icon1">
                <IoIosMenu />
              </span>
              <span className="text">All Categories</span>
              <span className="icon2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to="/">
                  Home
                  <IoHomeOutline />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Shop
                  <CiShop />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Meats & Seafood
                  <IoFastFoodOutline />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Bakery
                  <MdOutlineBakeryDining />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Beverages
                  <MdOutlineEmojiFoodBeverage />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Blog
                  <TbBrandBlogger />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Contact <MdOutlineContactPhone />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
