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
        const newUser = {
          employeeId: 1,
          username: actionPayload.username,
          products: null,
          role: 'ADMIN'
        }
        updateLocalStorage('USER', newUser);
        return newUser;
      }
      const newUser = {
        employeeId: getRandomNumber(),
        username: actionPayload.username,
        products: [],
        role: 'USER'
      }
      updateLocalStorage('USER', newUser);
      return newUser;
    }

    default:
      return initialUserState;

  }
}