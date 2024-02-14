import React from 'react';
import DatePicker from 'react-datepicker';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import './datePicker.css'; // Import your custom styles

const MyDatePicker = () => {
  return (
    <div className="date-picker-container">
      <DatePicker
        open={true}
        className="date-picker-input"
        selected={new Date()}
        onChange={(date) => console.log(date)}
        showPopperArrow={false}
        customInput={<div style={{ display: 'none' }} />} // Hide the input field
      />
    </div>
  );
};

export default MyDatePicker;