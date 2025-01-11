import { Button } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";
import "./index.css";
const SearchBox = () => {
  return (
    <div className="headerSearch">
      <input type="text" placeholder="Search for products..." />
      <Button>
        <IoSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
