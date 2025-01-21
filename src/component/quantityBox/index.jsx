import { Button } from '@mui/material'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import './index.css'
const QuantityBox = () => {
  return (
    <div className="quantityDrop d-flex align-items-center">
    <Button>
      <FaMinus />
    </Button>
    <input type="text" value="1"></input>
    <Button>
      <FaPlus />
    </Button>
  </div>
  )
}

export default QuantityBox