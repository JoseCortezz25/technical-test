import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import {
  reducerCart,
  CART_ACTION_TYPES,
  initialCartState,
} from "../reducers/cart";
export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerCart, initialCartState);

  const addToCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
