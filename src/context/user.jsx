import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import {
  reducerUser,
  USER_ACTION_TYPES,
  initialUserState,
} from "../reducers/user";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerUser, initialUserState);
  const navigate = useNavigate();

  const login = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.LOGIN,
      payload: user,
    });
    navigate('/defaulters')
  };

  const addToProducts = (products) => {
    dispatch({
      type: USER_ACTION_TYPES.ADD_PRODUCTS,
      payload: products,
    });
    navigate('/')
  };

  return (
    <UserContext.Provider value={{ user: state, login, addToProducts }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
