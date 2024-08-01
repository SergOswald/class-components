import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from './counterSlice';


const CheckboxComponent = () => {
//  const [isChecked, setIsChecked] = useState(false);

const [isChecked, setIsChecked] = useState(false);
const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      dispatch(increment());
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}

        />
        Check me
      </label>
    </div>
  );
};

export default CheckboxComponent;