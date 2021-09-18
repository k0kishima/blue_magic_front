import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DashboardPage } from "components/pages/DashboardPage";
import { SettingsPage } from "components/pages/SettingsPage";
import { LoginPage } from "components/pages/LoginPage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { PrivateRoute } from "routes";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export const App: React.VFC = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">{LoginPage}</Route>
          <PrivateRoute path="/settings" component={SettingsPage} />
          <PrivateRoute path="/" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
