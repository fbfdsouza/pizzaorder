import React from "react";
import images from "../../images";
import FoodCardListItem from "../../components/FoodCardListItem";
import FoodCardList from "../../components/FoodCardList";

class ChoosePizzaToppingsPage extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "109px",
            alignItems: "center",
          }}
        >
          <h2>Choose your pizza toppings</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <FoodCardList>
            <div style={{ minWidth: "193.21px" }}>
              <FoodCardListItem image={images[0].src} itemName="Bacon" />
              <FoodCardListItem image={images[1].src} itemName="Black Olives" />
              <FoodCardListItem image={images[2].src} itemName="Cheese" />
              <FoodCardListItem
                image={images[3].src}
                itemName="Green Peppers"
              />
              <FoodCardListItem image={images[4].src} itemName="Mushrooms" />
            </div>
            <div style={{ minWidth: "193.21px" }}>
              <FoodCardListItem image={images[5].src} itemName="Pepperoni" />
              <FoodCardListItem image={images[6].src} itemName="Pineapple" />
              <FoodCardListItem image={images[7].src} itemName="Sausage" />
              <FoodCardListItem image={images[8].src} itemName="Spinach" />
              <FoodCardListItem image={images[9].src} itemName="Onions" />
            </div>
          </FoodCardList>
        </div>
      </div>
    );
  }
}

export default ChoosePizzaToppingsPage;
