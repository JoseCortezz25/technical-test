import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import {
  reducerUser,
  USER_ACTION_TYPES,
  initialUserState,
} from "../reducers/user";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerUser, initialUserState);

  const login = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.LOGIN,
      payload: user,
    });
  };

  const logout = () => {
    dispatch({
      type: USER_ACTION_TYPES.LOGOUT,
    })
  }

  return (
    <UserContext.Provider
      value={{
        user: state,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
