import React from "react";
import { LayoutContainer } from "components/shared/Layout";
import { SettingsPage } from "components/pages/SettingsPage";

export const SettingsContainer: React.VFC = () => {
  return (
    <LayoutContainer title="システム設定">
      <SettingsPage />
    </LayoutContainer>
  );
};
