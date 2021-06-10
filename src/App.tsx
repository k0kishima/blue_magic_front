import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DashboardContainer } from "containers/DashboardContainer";
import { SettingsContainer } from "containers/SettingsContainer";

export const App: React.VFC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {DashboardContainer}
          </Route>
          <Route path="/settings">{SettingsContainer}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
