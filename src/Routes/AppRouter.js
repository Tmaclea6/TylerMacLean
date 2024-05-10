import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "../Components/Common/Menu";
import PlanGame from "../Components/PlanGame";
import Wedding from "../Components/Page/Wedding";
import Contact from "../Components/Page/Contact";
import Place from "../Components/Page/Place";
import Redirect from "../Components/Page/Redirect";
function AppRouter() {
  return (
    <Router basename={"/tylermaclean"}>
      <Route exact path={`/`} component={PlanGame} />
      <Route path={`/Wedding`} component={Wedding} />
      <Route path={`/contact`} component={Contact} />
      <Route path={`/Place`} component={Place} />
      <Route path={`/Redirect`} component={Redirect} />
    </Router>
  );
}

export default AppRouter;
