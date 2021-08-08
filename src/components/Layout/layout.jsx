import React from "react";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";

import { Switch, Route } from "react-router-dom";
import router from "../../routes/router";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <LandingPage /> */}
      <Switch>
        {router.map((props, key) => {
          return (
            <Route
              exact
              path={props.path}
              key={key}
              component={props.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Layout;
