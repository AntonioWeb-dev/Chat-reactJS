import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Main from "../pages/main";
import { MyRoute } from "./PrivateRoute";

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={LoginPage} />
      <MyRoute exact path="/register" component={RegisterPage} />
      <MyRoute exact path="/chat" component={Main} isPrivate />
      <MyRoute exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
