import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DashboardPage } from "components/pages/DashboardPage";
import { SettingsPage } from "components/pages/SettingsPage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export const App: React.VFC = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {DashboardPage}
          </Route>
          <Route path="/settings">{SettingsPage}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
