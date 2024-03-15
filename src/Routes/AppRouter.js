import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "../Components/Common/Menu";
import PlanGame from "../Components/PlanGame";
import About from "../Components/Page/About";
import Contact from "../Components/Page/Contact";

function AppRouter() {
  return (
    <Router basename={"/myreactapp"}>
      <Route exact path={`/`} component={PlanGame} />
      <Route path={`/about`} component={About} />
      <Route path={`/contact`} component={Contact} />
    </Router>
  );
}

export default AppRouter;
