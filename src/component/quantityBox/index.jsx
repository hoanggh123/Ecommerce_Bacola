import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import './index.css';

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setQuantity(value === '' ? '' : parseInt(value, 10)); 
    }
  };

  return (
    <div className="quantityDrop d-flex align-items-center">
      <Button onClick={handleDecrease}>
        <FaMinus />
      </Button>
      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        className="quantityInput"
      />
      <Button onClick={handleIncrease}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default QuantityBox;
