import { BUY_CANDY } from "./candyTypes";

const initialState = {
  candy: 20,
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CANDY:
      return {
        ...state,
        candy: state.candy - 1,
      };

    default:
      return state;
  }
};

export default candyReducer;
