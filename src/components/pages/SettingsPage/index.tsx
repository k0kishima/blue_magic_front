import React from "react";
import { ItemListContainer } from "./ItemList";
import { LayoutContainer } from "components/shared/Layout";

export const SettingsPage: React.VFC = () => {
  return (
    <LayoutContainer title="システム設定">
      <ItemListContainer />
    </LayoutContainer>
  );
};
