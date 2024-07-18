import React from 'react';

function ImageWithText(props) {
  return (
    <div className="image-with-text-container">
      <div className="image-container">
        <img src="https://cdn.dribbble.com/users/786275/screenshots/3002185/media/e46f349422e80869ea032f62b284d8ed.png?resize=400x300&vertical=center" 
        alt={props.altText} />
      </div>
      <div className="text-container">
        <h1>Simple money tracker</h1>
        <p>It takes seconds to record daily transactions.Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
      </div>
    </div>
  );
}

export default ImageWithText;
