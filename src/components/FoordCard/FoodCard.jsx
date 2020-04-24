import React from "react";

const FoodCard = ({ image }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image.src} alt={image.description} />
      </div>
      <div className="content">
        <a className="header">{image.description}</a>
        <div className="meta">
          <span className="date">{image.description}</span>
        </div>
        <div className="description">{image.description}</div>
      </div>
      <div className="extra content">
        <a>+ $0.50</a>
      </div>
    </div>
  );
};

export default FoodCard;
