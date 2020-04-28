import { PIZZA_TOPPINGS } from "../actions/constants";

const initialState = {
  bancon: false,
  blackolives: false,
  cheese: false,
  greenpeppers: false,
  mushrooms: false,
  pepperoni: false,
  pineapple: false,
  sausage: false,
  spinach: false,
  onions: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PIZZA_TOPPINGS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
