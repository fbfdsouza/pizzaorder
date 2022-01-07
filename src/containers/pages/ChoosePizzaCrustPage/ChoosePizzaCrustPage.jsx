import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import PresentationFoodCardList from "../../../components/PresentationFoodCardList";
import PresentationFoodCard from "../../../components/PresentationFoordCard";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { setPizzaCrust } from "../../../actions";

const ChoosePizzaCrustPage = (props) => {
  const { t } = useTranslation();
  const { setPizzaCrust, match: {params:{lang}}  } = props;
  debugger
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
          <h2>{t('pizza.crust.title')}</h2>
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
        <Link to={`/${lang}`}>
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
              description={t("pizza.crust.thin")}
              onClick={setPizzaCrust}
            />

            <PresentationFoodCard
              image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_100,w_100/v1588062925/pizzaorder/bd9180dc164d6192cb6ab9b206fc8f6f_egjsax.png"
              name="thick"
              description={t("pizza.crust.thick")}
              onClick={setPizzaCrust}
            />
          </Fragment>
        </PresentationFoodCardList>
        <Link to={`${lang}/choose-pizza-toppings`}>
          <i
            class="right chevron icon"
            style={{ marginLeft: "30px", color: "green" }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { pizzaSize: state.pizzaSize };
};

export default connect(mapStateToProps, { setPizzaCrust })(
  ChoosePizzaCrustPage
);
