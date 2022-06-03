import { ADD_TO_CART } from "../constants/ActionTypes";

const cart = [];

const addCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      // Check if product is already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    // return {
    //   ...state,
    //   cart: [...state, product],
    // };
    // break;
    default:
      return state;
      break;
  }
};

export default addCart;
