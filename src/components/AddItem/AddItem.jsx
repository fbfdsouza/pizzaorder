import React from "react";
import Button from "../Button";

class AddItem extends React.Component {
  render() {
    const { itemName, updateToppings, enabled } = this.props;
    return (
      <div
        style={{
          display: "flex",
          border: "1px solid #ccc",
          borderRadius: "4px",
          margin: "0px 5px",
        }}
      >
        <Button onClick={() => updateToppings({ [itemName]: false })}>-</Button>
        <div>{enabled ? 1 : 0}</div>
        <Button onClick={() => updateToppings({ [itemName]: true })}>+</Button>
      </div>
    );
  }
}

export default AddItem;
