import React from "react";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";

import { Switch, Route } from "react-router-dom";
import router from "../../routes/router";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </div>
  );
};

export default Layout;
