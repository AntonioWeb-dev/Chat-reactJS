import { createContext, useReducer } from "react";

const UserContext = createContext({
  user: {},
  isLoggedIn: false,
  login: (user) => {},
  logout: () => {},
});

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
        isLoggedIn: false,
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
        isLoggedIn: true,
      });
    }
  }
}

function UserProvider(props) {
  const [state, dispatch] = useReducer(userReducer, {});
  getLoggedInState(dispatch, state);

  function login(user) {
    dispatch({
      type: "LOGIN",
      ...user,
    });
    user.isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(user));
  }
  function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT", isLoggedIn: false });
  }

  return <UserContext.Provider value={{ user: state, login, logout }} {...props} />;
}

export { UserContext, UserProvider };
