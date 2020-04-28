import React from "react";

const PresentationFoodCard = ({ image, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={image} alt={name} />

      <div>{name}</div>
    </div>
  );
};

export default PresentationFoodCard;
