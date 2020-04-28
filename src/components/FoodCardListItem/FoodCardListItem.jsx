import React from "react";
import AddItem from "../AddItem";

const FoodCardListItem = ({ image, itemName }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img class="ui avatar image" src={image} alt={itemName} />
      <div class="content">{itemName}</div>
      <AddItem itemName={itemName} />
    </div>
  );
};

export default FoodCardListItem;
