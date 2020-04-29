import React from "react";

const Receipt = ({ size, crust, toppings }) => {
  const renderToppings = (toppings) => {
    const filteredToppings = chosenToppings(toppings);

    return filteredToppings.map((topping) => {
      return (
        <div className="item" key={topping}>
          {topping} 0.5 $
        </div>
      );
    });
  };

  const totalPrice = (size, crust, toppings) => {
    const totalToppingsPrice = chosenToppings(toppings).length * 0.5;
    let sizePrice = pizzaSizePrice(size);
    const crustPrice = pizzaCrustPrice(crust);
    return sizePrice + totalToppingsPrice + crustPrice;
  };

  const chosenToppings = (toppings) => {
    const keys = Object.keys(toppings);

    return keys.filter((key) => {
      return toppings[key];
    });
  };

  const pizzaCrustPrice = (crust) => {
    return crust === "thin" ? 2 : 4;
  };

  const pizzaSizePrice = (size) => {
    let sizePrice = 0;
    const { pizzaSize } = size;
    if (pizzaSize === "small") sizePrice = 8;
    else if (pizzaSize === "medium") sizePrice = 10;
    else sizePrice = 12;
    return sizePrice;
  };
  return (
    <div className="ui celled ordered list">
      <div className="item" key="size">
        {`Size: ${size.pizzaSize} ${pizzaSizePrice(size)} $`}
      </div>
      <div className="item" key="crust">{`Crust: ${
        crust.thickness
      } ${pizzaCrustPrice(crust)} $`}</div>
      <div className="item" key="toppings">
        Toppings
        <div className="list">{renderToppings(toppings)}</div>
      </div>
      Total: {totalPrice(size, crust, toppings)} $
    </div>
  );
};

export default Receipt;
