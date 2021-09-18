import React from "react";
import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} from "services/settings";
import { ItemList } from "../Presentation";
import { Loading } from "components/shared/Loading";

export const ItemListContainer: React.VFC = () => {
  const { data, error, isLoading } = useGetSettingsQuery({});
  const [updateSetting] = useUpdateSettingsMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSetting({ var: event.target.name, value: event.target.checked });
  };

  return (
    <>
      {error ? (
        <h1>エラー</h1>
      ) : isLoading ? (
        <Loading />
      ) : data ? (
        <ItemList settings={data.settings} handleChange={handleChange} />
      ) : null}
    </>
  );
};