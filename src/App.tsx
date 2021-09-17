import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DashboardPage } from "components/pages/DashboardPage";
import { SettingsPage } from "components/pages/SettingsPage";

export const App: React.VFC = () => {
  return (
    <div>
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
