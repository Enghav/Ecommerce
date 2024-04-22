import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'; // Use regular star icon for empty star
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'; // Use solid star icon for filled star

const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);

  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? fasStar : farStar}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer', color: 'orange'}}
        />
      ))}
      <p>Current Rating: {rating}/{totalStars}</p>
    </div>
  );
};

export default StarRating;

