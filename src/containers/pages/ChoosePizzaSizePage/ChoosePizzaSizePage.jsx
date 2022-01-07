import React from "react";
import PresentationFoodCardList from "../../../components/PresentationFoodCardList";
import PresentationFoodCard from "../../../components/PresentationFoordCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setPizzaSize } from "../../../actions";
import { Animated } from "react-animated-css";
import { useTranslation } from 'react-i18next';


const ChoosePizzaSizePage = (props) => {
    const { t } = useTranslation();
    const { setPizzaSize, match: {params:{lang}}  } = props;

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
            <h2>{t('pizza.size.title')}</h2>
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
            <PresentationFoodCard
              image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_50,w_50/v1588062925/pizzaorder/pizzabox_ihlwjp.png"
              name="Small"
              price={""}
              onClick={() => setPizzaSize("small")}
            />

            <PresentationFoodCard
              image="https://res.cloudinary.com/fbfdsouza/image/upload/c_limit,h_60,w_60/v1588062925/pizzaorder/pizzabox_ihlwjp.png"
              name="Medium"
              price={""}
              onClick={() => setPizzaSize("meddium")}
            />

            <PresentationFoodCard
              image="https://res.cloudinary.com/fbfdsouza/image/upload/c_scale,h_70,w_70/v1588062925/pizzaorder/pizzabox_ihlwjp.png"
              name="Big"
              price={""}
              onClick={() => setPizzaSize("big")}
            />
          </PresentationFoodCardList>
          <div>
            <Link to={`${lang}/choose-pizza-crust`}>
              <i
                className="right chevron icon"
                style={{ marginRight: "30px", color: "green" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    );
  
}

const mapStateToProps = (state) => {
  return { pizzaSize: state.pizzaSize };
};

export default connect(mapStateToProps, { setPizzaSize })(ChoosePizzaSizePage);

