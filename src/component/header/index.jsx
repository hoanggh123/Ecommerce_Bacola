import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../assets/images/bacola-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import SearchBox from "./searchBox";
import Navigation from "./navigation";
import CountryDropdown from "../countryDropdown";
import { MyContext } from "../../App";
const Header = () => {
  const context = useContext(MyContext);
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
              <SearchBox />

              <div className="part3 d-flex align-items-center ml-3"> 
                {context.isLogin !== true ? (
                 <Link to="/signIn"> <Button className="btn-blue btn-round mr-1">Sign In</Button></Link>
                ) : (
                  <Button className="circleBtn">
                    <CiUser />
                  </Button>
                )}

                <div className="cartTab ml-auto">
                  <span className="price">$0.00</span>
                  <Button className="circleBtn ml-1 btnCartItem">
                    <CiShoppingCart />
                    <span className="d-flex align-items-center justify-content-center count">
                      0
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
