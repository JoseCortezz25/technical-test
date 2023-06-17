import { updateLocalStorage } from "./utilities";
export const initialCartState = JSON.parse(window.localStorage.getItem('CART')) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const reducerCart = (state, action) => {
  const { payload: actionPayload, type: actionType } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { pId } = actionPayload;
      const productInCart = state.findIndex((item) => item.pId === pId);

      if (productInCart >= 0) {
        const newState = structuredClone(state);
        newState[productInCart].quantity += 1;
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
      updateLocalStorage('CART', newState);
      return newState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { pId } = actionPayload;
      const productInCart = state.findIndex((item) => item.pId === pId);

      if (productInCart >= 0) {
        const newState = structuredClone(state);
        newState[productInCart].quantity -= 1;
        if (newState[productInCart].quantity === 0) {
          newState.splice(productInCart, 1);
        }

        updateLocalStorage('CART', newState);
        return newState;
      }
      break;
    }


    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage(initialCartState)
      return initialCartState;
    }

    default:
      return state;
  }
};