import { Button } from '@mui/material'
import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import './index.css'
const CountryDropdown  = () => {
  return (
    <Button className="countryDrop">
    <div className="info d-flex flex-column">
      <span className="label">Your Location</span>
      <span className="name">VietNamese</span>
    </div>
    <span className='ml-auto'><FaAngleDown />
    </span>
  </Button>
  )
}

export default CountryDropdown 