import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Main from "../pages/main";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/chat" component={Main} />
    </Switch>
  );
}

export default Routes;
