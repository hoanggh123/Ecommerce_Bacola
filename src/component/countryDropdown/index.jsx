import { Button, Slide } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { MyContext } from "../../App";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import "./index.css";
import { IoIosClose } from "react-icons/io";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, setcountryList] = useState([]);
  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setselectedTab(index);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  };
  useEffect(() => {
    setcountryList(context.countryList);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = context.countryList.filter((item) => {
      return item.country.toLowerCase().includes(keyword);
    });
    setcountryList(list);
  };

  return (
    <React.Fragment>
      <Button
        className="countryDrop d-flex align-items-center"
        onClick={() => setIsOpenModal(true)}
      >
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry.length > 10
                ? context.selectedCountry?.substr(0, 10) + "..."
                : context.selectedCountry
              : "Select Location"}
          </span>
        </div>
        <span className="countryDropIcons">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h6 className="mb-0">Choose your Delivery Location</h6>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button onClick={() => setIsOpenModal(false)} className="close-popup">
          <IoIosClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            onChange={filterList}
            type="text"
            placeholder="Search for products..."
          />
          <Button>
            <IoSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => (
              <li
                className={`${selectedTab === index ? "active" : ""}`}
                key={index}
              >
                <Button onClick={() => selectCountry(index, item.country)}>
                  {item.country}
                </Button>
              </li>
            ))}
        </ul>
      </Dialog>
    </React.Fragment>
  );
};

export default CountryDropdown;
