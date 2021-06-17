import React from "react";
import { LayoutContainer } from "containers/LayoutContainer";
import { SettingsPage } from "components/pages/SettingsPage";

export const SettingsContainer: React.VFC = () => {
  return (
    <LayoutContainer title="システム設定">
      <SettingsPage />
    </LayoutContainer>
  );
};
