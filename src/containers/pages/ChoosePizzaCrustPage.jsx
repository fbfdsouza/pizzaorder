import React, { Fragment } from "react";
import PresentationFoodCardList from "../../components/PresentationFoodCardList";
import PresentationFoodCard from "../../components/PresentationFoordCard";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

class ChoosePizzaCrustPage extends React.Component {
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
          <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
            <h2>Choose your pizza crust</h2>
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
          <PresentationFoodCardList>
            <Fragment>
              <Link to="choose-pizza-toppings">
                <PresentationFoodCard
                  image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_100,w_100/v1588062925/pizzaorder/thick_a1f0gr.png"
                  name="Thin"
                />
              </Link>

              <PresentationFoodCard
                image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_100,w_100/v1588062925/pizzaorder/bd9180dc164d6192cb6ab9b206fc8f6f_egjsax.png"
                name="Thick"
              />
            </Fragment>
          </PresentationFoodCardList>
        </div>
      </div>
    );
  }
}

export default ChoosePizzaCrustPage;
