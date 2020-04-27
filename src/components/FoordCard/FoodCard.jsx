import React from "react";

const FoodCard = ({ image }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image.src} alt={image.description} />
      </div>
      <div className="content">
        <div className="description">{image.description}</div>
      </div>
      <div className="extra content">
        <a>+ $0.50</a>
      </div>
    </div>
  );
};

export default FoodCard;
