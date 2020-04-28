import { CRUST_THICKNESS } from "../actions/constants";

const initialState = {
  thickness: "thin",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CRUST_THICKNESS:
      return { ...state, thickness: action.payload };
    default:
      return state;
  }
};
