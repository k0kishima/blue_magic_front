import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import styled from "styled-components";
import { useGetSettingsQuery } from "services/settings";

export const SettingsPage: React.VFC = () => {
  const { data, error, isLoading } = useGetSettingsQuery({});

  const Styled = styled.div`
    fieldset {
      display: block;
      margin: 20px 0px;
    }
  `;

  return (
    <Styled>
      {error ? (
        <h1>エラー</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        <>
          {data.settings.map(
            (item: { var: string; value: boolean }, i: number) => (
              <FormControl key={i} component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        name="gilad"
                        color="primary"
                        checked={item.value}
                      />
                    }
                    label={item.var}
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
            )
          )}
        </>
      ) : null}
    </Styled>
  );
};
