import React from "react";
import { connect } from "react-redux";
import PresentationFoodCardList from "../../../components/PresentationFoodCardList";
import { Receipt } from "./ReviewCustomPizzaComponents";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { useTranslation } from "react-i18next";

const ChoosePizzaCrustPage = (props) => {
  const { t } = useTranslation();
  const {
    size,
    crust,
    toppings,
    match: {
      params: { lang },
    },
  } = props;

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
          <h2>{t("pizza.receipt.title")}</h2>
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
        <Link to={`/${lang}/choose-pizza-toppings`}>
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
};

const mapStateToProps = (state) => {
  return {
    size: state.pizzaSize,
    crust: state.thickeness,
    toppings: state.toppings,
  };
};

export default connect(mapStateToProps, {})(ChoosePizzaCrustPage);
