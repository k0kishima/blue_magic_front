import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import styled from "styled-components";

export const SettingsPage: React.VFC = () => {
  const Styled = styled.div`
    fieldset {
      display: block;
      margin: 20px 0px;
    }
  `;

  return (
    <Styled>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={<Switch name="gilad" color="primary" />}
            label="Gilad Gray"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={<Switch name="gilad" color="primary" />}
            label="Gilad Gray"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </Styled>
  );
};
