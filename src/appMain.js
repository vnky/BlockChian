import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { appRoutes, appStore } from "./ducks";
import { Provider } from "react-redux";
import { LayoutContainer } from "./common";

export const AppMain = props => (
  <Provider store={appStore}>
    <LayoutContainer>
      <Router>
        {appRoutes.map(({ path, Component }, idx) => (
          <Route path={path} component={Component} key={idx} exact={true} />
        ))}
      </Router>
    </LayoutContainer>
  </Provider>
);
