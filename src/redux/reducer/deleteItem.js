import { DEL_FROM_CART } from "../constants/ActionTypes";

const cart = [];

const deleteCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case DEL_FROM_CART:
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default deleteCart;
