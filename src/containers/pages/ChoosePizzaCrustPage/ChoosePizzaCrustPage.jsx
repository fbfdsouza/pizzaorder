import React, { Fragment } from "react";
import { connect } from "react-redux";
import PresentationFoodCardList from "../../../components/PresentationFoodCardList";
import PresentationFoodCard from "../../../components/PresentationFoordCard";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { setPizzaCrust } from "../../../actions";

class ChoosePizzaCrustPage extends React.Component {
  render() {
    const { setPizzaCrust } = this.props;
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
          <Link to="/">
            <i
              class="left chevron icon"
              style={{ marginRight: "30px", color: "green" }}
            ></i>
          </Link>
          <PresentationFoodCardList>
            <Fragment>
              <PresentationFoodCard
                image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_100,w_100/v1588062925/pizzaorder/thick_a1f0gr.png"
                name="thin"
                description="Thin"
                onClick={setPizzaCrust}
              />

              <PresentationFoodCard
                image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_100,w_100/v1588062925/pizzaorder/bd9180dc164d6192cb6ab9b206fc8f6f_egjsax.png"
                name="thick"
                description="Thick"
                onClick={setPizzaCrust}
              />
            </Fragment>
          </PresentationFoodCardList>
          <Link to="/choose-pizza-toppings">
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
  return { pizzaSize: state.pizzaSize };
};

export default connect(mapStateToProps, { setPizzaCrust })(
  ChoosePizzaCrustPage
);
