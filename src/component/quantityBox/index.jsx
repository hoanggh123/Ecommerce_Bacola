import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import './index.css';

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1); // Tăng số lượng
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Giảm số lượng, không cho nhỏ hơn 1
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Kiểm tra xem giá trị có phải là số nguyên dương hay không
    if (/^\d*$/.test(value)) {
      setQuantity(value === '' ? '' : parseInt(value, 10)); // Nếu rỗng thì giữ rỗng, nếu không thì chuyển thành số
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
        onChange={handleInputChange} // Thêm sự kiện onChange để cập nhật giá trị
        className="quantityInput"
      />
      <Button onClick={handleIncrease}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default QuantityBox;
