import React from "react";
import Button from "../Button";

class AddItem extends React.Component {
  render() {
    const { itemName } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <Button>-</Button>
        <div>0</div>
        <Button>+</Button>
      </div>
    );
  }
}

export default AddItem;
