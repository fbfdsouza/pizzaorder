import React, { Fragment } from "react";
import PresentationFoodCardList from "../../components/PresentationFoodCardList";
import PresentationFoodCard from "../../components/PresentationFoordCard";

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
          <h2>Choose your pizza crust</h2>
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
              <PresentationFoodCard
                image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_100,w_100/v1588062925/pizzaorder/thick_a1f0gr.png"
                name="Thin"
              />
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
