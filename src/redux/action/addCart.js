//For add item to cart
import { ADD_TO_CART } from "../constants/ActionTypes";

// export const cart = () => {
//   return (dispatch) => async () => {
//     const response = await fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((records) => {
//         // console.log("api", response.json());
//         dispatch(addCart(res));
//       });
//   };
// };

// export const addCart = () => (dispatch) => {
//   dispatch({ type: ADD_TO_CART });
//   const url = "https://fakestoreapi.com/products";
//   fetch(url, {
//     method: "get",
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       dispatch({ type: ADD_TO_CART, payload: response.data });
//     });
// };

export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
