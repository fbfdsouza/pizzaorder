import React, { Fragment } from "react";
import PresentationFoodCardList from "../../components/PresentationFoodCardList";
import PresentationFoodCard from "../../components/PresentationFoordCard";
class ChoosePizzaSizePage extends React.Component {
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
          <h2>Choose your pizza size</h2>
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
                image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_50,w_50/v1588062925/pizzaorder/pizzabox_ihlwjp.png"
                name="Small"
                price={""}
              />
              <PresentationFoodCard
                image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_60,w_60/v1588062925/pizzaorder/pizzabox_ihlwjp.png"
                name="Medium"
                price={""}
              />
              <PresentationFoodCard
                image="https://res.cloudinary.com/fbfdsouza/image/upload/c_scale,h_70,w_70/v1588062925/pizzaorder/pizzabox_ihlwjp.png"
                name="Big"
                price={""}
              />
            </Fragment>
          </PresentationFoodCardList>
        </div>
      </div>
    );
  }
}

export default ChoosePizzaSizePage;
