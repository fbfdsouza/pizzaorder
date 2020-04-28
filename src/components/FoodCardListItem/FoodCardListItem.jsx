import React from "react";
import AddItem from "../AddItem";

const FoodCardListItem = ({
  image,
  itemName,
  description,
  updateToppings,
  enabled,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img className="ui avatar image" src={image} alt={itemName} />
      <div className="content">{description}</div>
      <AddItem
        itemName={itemName}
        updateToppings={updateToppings}
        enabled={enabled}
      />
    </div>
  );
};

export default FoodCardListItem;
