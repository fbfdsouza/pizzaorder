import React from "react";
import { connect } from "react-redux";
import PresentationFoodCardList from "../../../components/PresentationFoodCardList";
import { Receipt } from "./ReviewCustomPizzaComponents";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

class ChoosePizzaCrustPage extends React.Component {
  render() {
    const { size, crust, toppings } = this.props;
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
            <h2>Receipt</h2>
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
          <Link to="/choose-pizza-toppings">
            <i
              className="left chevron icon"
              style={{ marginRight: "30px", color: "green" }}
            ></i>
          </Link>
          <PresentationFoodCardList>
            <Receipt size={size} crust={crust} toppings={toppings} />
          </PresentationFoodCardList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.pizzaSize,
    crust: state.thickeness,
    toppings: state.toppings,
  };
};

export default connect(mapStateToProps, {})(ChoosePizzaCrustPage);
