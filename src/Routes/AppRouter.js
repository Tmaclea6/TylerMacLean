import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "../Components/Common/Menu";
import PlanGame from "../Components/PlanGame";
import Wedding from "../Components/Page/Wedding";
import Contact from "../Components/Page/Contact";
import Place from "../Components/Page/Place";
import Party from "../Components/Page/Party";
import Redirect from "../Components/Page/Redirect";
function AppRouter() {
  return (
    <Router basename={""}>
      <Route path={`/Plangame`} component={PlanGame} />
      <Route path={`/Wedding`} component={Wedding} />
      <Route path={`/contact`} component={Contact} />
      <Route path={`/Place`} component={Place} />
      <Route path={`/Party`} component={Party} />
      <Route exact path={`/`} component={Redirect} />
    </Router>
  );
}

export default AppRouter;
