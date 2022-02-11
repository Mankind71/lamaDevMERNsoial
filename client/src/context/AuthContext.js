import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";


const INITIAL_STATE = {
  user: {
    _id: "61ed82c3e77a51edf169e22b",
    username: "john",
    email: "john@gmail.com",
    profilePicture: "2.jpeg",
    coverPicture: "",
    followers: [],
    following: ["61eb4b06c3cb4494b1065414"],
    isAdmin: false,
    // city: "madrid",
    // from: "Los Angeles",
    // relationship: 3,
  },
  isFectching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFectching: state.isFectching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
