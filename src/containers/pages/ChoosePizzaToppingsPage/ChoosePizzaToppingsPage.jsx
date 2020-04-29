import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import images from "../../../images";
import FoodCardListItem from "../../../components/FoodCardListItem";
import FoodCardList from "../../../components/FoodCardList";
import { Animated } from "react-animated-css";
import { setPizzaToppings } from "../../../actions";

class ChoosePizzaToppingsPage extends React.Component {
  render() {
    const { setPizzaToppings, toppings } = this.props;
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
          <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
            <h2>Choose your pizza toppings</h2>
          </Animated>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Link to="/choose-pizza-crust">
            <i
              class="left chevron icon"
              style={{ marginRight: "30px", color: "green" }}
            ></i>
          </Link>
          <FoodCardList>
            <div style={{ minWidth: "193.21px" }}>
              <FoodCardListItem
                image={images[0].src}
                itemName="bancon"
                description="Bacon"
                updateToppings={setPizzaToppings}
                enabled={toppings["bancon"]}
              />
              <FoodCardListItem
                image={images[1].src}
                itemName="blackolives"
                description="Black Olives"
                updateToppings={setPizzaToppings}
                enabled={toppings["blackolives"]}
              />
              <FoodCardListItem
                image={images[2].src}
                itemName="cheese"
                description="Cheese"
                updateToppings={setPizzaToppings}
                enabled={toppings["cheese"]}
              />
              <FoodCardListItem
                image={images[3].src}
                itemName="greenpeppers"
                description="Green Peppers"
                updateToppings={setPizzaToppings}
                enabled={toppings["greenpeppers"]}
              />
              <FoodCardListItem
                image={images[4].src}
                itemName="mushrooms"
                description="Mushrooms"
                updateToppings={setPizzaToppings}
                enabled={toppings["mushrooms"]}
              />
            </div>
            <div style={{ minWidth: "193.21px" }}>
              <FoodCardListItem
                image={images[5].src}
                itemName="pepperoni"
                description="Pepperoni"
                updateToppings={setPizzaToppings}
                enabled={toppings["pepperoni"]}
              />
              <FoodCardListItem
                image={images[6].src}
                itemName="pineapple"
                description="Pineapple"
                updateToppings={setPizzaToppings}
                enabled={toppings["pineapple"]}
              />
              <FoodCardListItem
                image={images[7].src}
                itemName="sausage"
                description="Sausage"
                updateToppings={setPizzaToppings}
                enabled={toppings["sausage"]}
              />
              <FoodCardListItem
                image={images[8].src}
                itemName="spinach"
                description="Spinach"
                updateToppings={setPizzaToppings}
                enabled={toppings["spinach"]}
              />
              <FoodCardListItem
                image={images[9].src}
                itemName="onions"
                description="Onions"
                updateToppings={setPizzaToppings}
                enabled={toppings["onions"]}
              />
            </div>
          </FoodCardList>
          <Link to="/pizza-receipt">
            <i
              class="right chevron icon"
              style={{ marginLeft: "30px", color: "green" }}
            ></i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { toppings: state.toppings };
};

export default connect(mapStateToProps, { setPizzaToppings })(
  ChoosePizzaToppingsPage
);
