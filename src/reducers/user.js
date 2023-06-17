import { getRandomNumber, updateLocalStorage } from "./utilities";
export const initialUserState = JSON.parse(window.localStorage.getItem('USER')) || {};


export const USER_ACTION_TYPES = {
  LOGIN: 'ADD_USER',
  ADD_PRODUCTS: 'ADD_PRODUCTS',
}

export const reducerUser = (state, action) => {
  const { payload: actionPayload, type: actionType } = action;

  switch (actionType) {
    case USER_ACTION_TYPES.LOGIN: {
      if (actionPayload.username === 'admin' && actionPayload.password === 'admin') {
        console.log({ empployeeId: 1, username: actionPayload.username, products: null, role: 'admin' });
        const newUser = {
          empployeeId: 1,
          username: actionPayload.username,
          products: null,
          role: 'admin'
        }
        updateLocalStorage('USER', newUser);
        return newUser;
      }
      const newUser = {
        empployeeId: getRandomNumber(),
        username: actionPayload.username,
        products: [],
        role: 'user'
      }
      updateLocalStorage('USER', newUser);
      return newUser;
    }

    case USER_ACTION_TYPES.ADD_PRODUCTS: {
      const newUser = {
        ...state,
        products: [
          ...state.products,
          {
            pId: actionPayload.pId,
            quantity: actionPayload.quantity
          }
        ]
      }

      updateLocalStorage('USER', newUser);
      return newUser;
    }

    default:
      return initialUserState;

  }
}