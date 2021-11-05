import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../context/userContext";

export function MyRoute({ isPrivate, component: Component, ...rest }) {
  const { user } = useContext(UserContext);
  if (isPrivate && !user?.isLoggedIn) {
    return <Redirect to={{ pathname: "/", state: { from: rest.location.pathname } }} />;
  }
  return <Route {...rest} component={Component} />;
}
