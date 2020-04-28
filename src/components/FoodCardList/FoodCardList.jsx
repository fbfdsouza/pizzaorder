import React from "react";

const FoodCardList = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        minWidth: "450px",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};

export default FoodCardList;
