import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";
import crustReducer from "./crustReducer";
import toppinsReducer from "./toppingsReducer";

export default combineReducers({
  pizzaSize: pizzaReducer,
  thickeness: crustReducer,
  toppings: toppinsReducer,
});
