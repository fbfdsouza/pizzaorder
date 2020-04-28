import { PIZZA_SIZE } from "../actions/constants";

const initialState = {
  pizzaSize: "small",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PIZZA_SIZE:
      return { ...state, pizzaSize: action.payload };
    default:
      return state;
  }
};
