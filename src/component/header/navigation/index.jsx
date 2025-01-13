import { Button } from "@mui/material";
import React, { useState } from "react";
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
import {
  FaCarrot,
  FaDrumstickBite,
  FaEgg,
  FaCoffee,
  FaBreadSlice,
  FaIceCream,
  FaCookie,
  FaShoppingBasket,
} from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";

const Navigation = () => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setCategoryOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={toggleCategoryMenu}
              >
                <span className="icon1">
                  <IoIosMenu />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2">
                  <FaAngleDown />
                </span>
              </Button>
              <div className={`sideBarMenu ${isCategoryOpen ? "active" : ""}`}>
                <ul>
                  <li>
                    <Link to="/fruits-vegetables">
                      <FaCarrot />
                      <Button>Fruits & Vegetables</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/meats-seafood">
                      <FaDrumstickBite />
                      <Button>Meats & Seafood</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/breakfast-dairy">
                      <FaEgg />
                      <Button>Breakfast & Dairy</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/beverages">
                      <FaCoffee />
                      <Button>Beverages</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/breads-bakery">
                      <FaBreadSlice />
                      <Button>Breads & Bakery</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/frozen-foods">
                      <FaIceCream />
                      <Button>Frozen Foods</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/biscuits-snacks">
                      <FaCookie />
                      <Button>Biscuits & Snacks</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/grocery-staples">
                      <FaShoppingBasket />
                      <Button>Grocery & Staples</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Links Section */}
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
                <div className="subMenu">
                  <ul>
                    <li>
                      <Link to="/meats">Fresh Meats</Link>
                    </li>
                    <li>
                      <Link to="/seafood">Seafood</Link>
                    </li>
                    <li>
                      <Link to="/special-cuts">Special Cuts</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Bakery
                  <MdOutlineBakeryDining />
                </Link>
                <div className="subMenu">
                  <ul>
                    <li>
                      <Link to="/breads">Breads</Link>
                    </li>
                    <li>
                      <Link to="/cakes">Cakes</Link>
                    </li>
                    <li>
                      <Link to="/pastries">Pastries</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Beverages
                  <MdOutlineEmojiFoodBeverage />
                </Link>
                <div className="subMenu">
                  <ul>
                    <li>
                      <Link to="/hot-drinks">Hot Drinks</Link>
                    </li>
                    <li>
                      <Link to="/cold-drinks">Cold Drinks</Link>
                    </li>
                    <li>
                      <Link to="/alcoholic">Alcoholic Beverages</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Blog
                  <TbBrandBlogger />
                </Link>
                <div className="subMenu">
                  <ul>
                    <li>
                      <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                      <Link to="/tips">Tips</Link>
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Contact
                  <MdOutlineContactPhone />
                </Link>
                <div className="subMenu">
                  <ul>
                    <li>
                      <Link to="/contact-form">Contact Form</Link>
                    </li>
                    <li>
                      <Link to="/faqs">FAQs</Link>
                    </li>
                    <li>
                      <Link to="/support">Support</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
