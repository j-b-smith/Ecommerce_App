import React from 'react';

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((starValue, index) => {
        return (
          <span>
            <i
              style={{ color }}
              className={
                value >= starValue
                  ? 'fas fa-star'
                  : value >= index + 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
        );
      })}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
