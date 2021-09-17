import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DashboardContainer } from "containers/DashboardContainer";
import { SettingsPage } from "components/pages/SettingsPage";

export const App: React.VFC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {DashboardContainer}
          </Route>
          <Route path="/settings">{SettingsPage}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
