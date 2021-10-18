import { createContext, useReducer } from "react";

const UserContext = createContext({
  user: {},
  login: (user) => {},
  logout: () => {},
});

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
}

function getLoggedInState(dispatch, state) {
  const store = localStorage.getItem("user");
  if (store && state === false) {
    const user = JSON.parse(store);
    if (user.isLoggedIn) {
      dispatch({
        type: "LOGIN",
        user,
      });
    }
  }
}

function UserProvider(props) {
  const [state, dispatch] = useReducer(userReducer, false);
  getLoggedInState(dispatch, state);

  function login(user) {
    user.isLoggedIn = true;
    dispatch({
      type: "LOGIN",
      user,
    });
    localStorage.setItem("user", JSON.stringify(user));
  }

  function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT", user: {} });
  }

  return <UserContext.Provider value={{ user: state, login, logout }} {...props} />;
}

export { UserContext, UserProvider };
