import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import images from "../../../images";
import FoodCardListItem from "../../../components/FoodCardListItem";
import FoodCardList from "../../../components/FoodCardList";
import { Animated } from "react-animated-css";
import { setPizzaToppings } from "../../../actions";
import { useTranslation } from "react-i18next";

const ChoosePizzaToppingsPage = (props) => {
  const { t } = useTranslation();
  const {
    setPizzaToppings,
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
          <h2>{t("pizza.toppings.title")}</h2>
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
        <Link to={`/${lang}/choose-pizza-crust`}>
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
              description={t("pizza.toppings.bacon")}
              updateToppings={setPizzaToppings}
              enabled={toppings["bancon"]}
            />
            <FoodCardListItem
              image={images[1].src}
              itemName="blackolives"
              description={t("pizza.toppings.blackolives")}
              updateToppings={setPizzaToppings}
              enabled={toppings["blackolives"]}
            />
            <FoodCardListItem
              image={images[2].src}
              itemName="cheese"
              description={t("pizza.toppings.cheese")}
              updateToppings={setPizzaToppings}
              enabled={toppings["cheese"]}
            />
            <FoodCardListItem
              image={images[3].src}
              itemName="greenpeppers"
              description={t("pizza.toppings.greenpeppers")}
              updateToppings={setPizzaToppings}
              enabled={toppings["greenpeppers"]}
            />
            <FoodCardListItem
              image={images[4].src}
              itemName="mushrooms"
              description={t("pizza.toppings.mushrooms")}
              updateToppings={setPizzaToppings}
              enabled={toppings["mushrooms"]}
            />
          </div>
          <div style={{ minWidth: "193.21px" }}>
            <FoodCardListItem
              image={images[5].src}
              itemName="pepperoni"
              description={t("pizza.toppings.pepperoni")}
              updateToppings={setPizzaToppings}
              enabled={toppings["pepperoni"]}
            />
            <FoodCardListItem
              image={images[6].src}
              itemName="pineapple"
              description={t("pizza.toppings.pineapple")}
              updateToppings={setPizzaToppings}
              enabled={toppings["pineapple"]}
            />
            <FoodCardListItem
              image={images[7].src}
              itemName="sausage"
              description={t("pizza.toppings.sausage")}
              updateToppings={setPizzaToppings}
              enabled={toppings["sausage"]}
            />
            <FoodCardListItem
              image={images[8].src}
              itemName="spinach"
              description={t("pizza.toppings.spinach")}
              updateToppings={setPizzaToppings}
              enabled={toppings["spinach"]}
            />
            <FoodCardListItem
              image={images[9].src}
              itemName="onions"
              description={t("pizza.toppings.onions")}
              updateToppings={setPizzaToppings}
              enabled={toppings["onions"]}
            />
          </div>
        </FoodCardList>
        <Link to={`/${lang}/pizza-receipt`}>
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
  return { toppings: state.toppings };
};

export default connect(mapStateToProps, { setPizzaToppings })(
  ChoosePizzaToppingsPage
);
