import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../assets/images/bacola-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearch } from "react-icons/io5";

import CountryDropdown from "../countryDropdown";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="top-strip bg-purple text-white">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
            Due to the <b>COVID 19</b> epidemic, orders may be processed with a
            slight delay
          </p>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to={"/"} className="logo">
                <img src={Logo} alt={Logo} />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              <CountryDropdown />
              <div className="headerSearch">
                <input type="text"  placeholder="Search for products..."/>
                <Button>
                  <IoSearch />
                </Button>
              </div>
            </div>
            <div className="part3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
