import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../types/cart.types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      alreadyExists = true;
      item.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      item.count--;
      if (item.count === 0) {
        cartItems.splice(cartItems.indexOf(item), 1);
      }
    }
  });
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
  localStorage.removeItem("cartItems");
};
