import { PIZZA_SIZE, CRUST_THICKNESS, PIZZA_TOPPINGS } from "./constants";

export const setPizzaSize = (pizza_size) => {
  return { type: PIZZA_SIZE, payload: pizza_size };
};

export const setPizzaCrust = (crust_thickness) => {
  return { type: CRUST_THICKNESS, payload: crust_thickness };
};

export const setPizzaToppings = (pizza_toppings) => {
  return { type: PIZZA_TOPPINGS, payload: pizza_toppings };
};
