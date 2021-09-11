import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import styled from "styled-components";

type ItemListProps = {
  settings: [];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type ItemProps = {
  name: string;
  value: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ItemList: React.FC<ItemListProps> = ({
  settings,
  handleChange,
}: ItemListProps) => {
  const Styled = styled.div`
    fieldset {
      display: block;
      margin: 20px 0px;
    }
  `;

  return (
    <Styled>
      {settings.map((item: { var: string; value: boolean }, i: number) => (
        <Item
          handleChange={handleChange}
          key={i}
          name={item.var}
          value={item.value}
        />
      ))}
    </Styled>
  );
};

export const Item: React.FC<ItemProps> = ({
  name,
  value,
  handleChange,
}: ItemProps) => {
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              name={name}
              color="primary"
              checked={value}
              onChange={handleChange}
            />
          }
          label={name}
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
};
