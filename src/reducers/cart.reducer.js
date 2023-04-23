import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../types/cart.types";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case CLEAR_CART:
      return { cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
