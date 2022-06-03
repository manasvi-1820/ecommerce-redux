//For delete item from cart
import { DEL_FROM_CART } from "../constants/ActionTypes";

export const delCart = (id) => {
  return {
    type: DEL_FROM_CART,
    payload: id,
  };
};
