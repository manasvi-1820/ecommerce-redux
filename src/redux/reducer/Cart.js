import { ADD_TO_CART, DEL_FROM_CART } from "../constants/ActionTypes";

const initial_state = {
  cart: [],
};

export const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DEL_FROM_CART:
      const data = state.cart.filter((e) => e.id !== action.payload);
      return {
        ...state,
        cart: data,
      };
    default:
      return state;
  }
};
