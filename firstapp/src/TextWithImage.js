import React from 'react';

function TextWithImage(props) {
  return (
    <div className="text-with-image-container">
      <div className="text-container">
        <h1>Painless budgeting</h1>
        <p>
        Recording your daily expenses is quick and easy. Categorize them effortlessly into clear and visually organized sections, whether it's expenses like groceries and shopping or income sources like your salary and gifts
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://cdn.dribbble.com/users/386883/screenshots/4096710/13012018-dribbble.png?resize=400x300&vertical=center"
          alt={props.altText}
        />
      </div>
    </div>
  );
}

export default TextWithImage;
