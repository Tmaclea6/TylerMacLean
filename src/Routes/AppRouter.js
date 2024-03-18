import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "../Components/Common/Menu";
import PlanGame from "../Components/PlanGame";
import Wedding from "../Components/Page/Wedding";
import Contact from "../Components/Page/Contact";

function AppRouter() {
  return (
    <Router basename={"/tylermaclean"}>
      <Route exact path={`/`} component={PlanGame} />
      <Route path={`/Wedding`} component={Wedding} />
      <Route path={`/contact`} component={Contact} />
    </Router>
  );
}

export default AppRouter;
