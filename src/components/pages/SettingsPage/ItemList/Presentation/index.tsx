import React from "react";
import styled from "styled-components";
import { ItemContainer } from "components/pages/SettingsPage/Item";

type Props = {
  settings: [];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ItemList: React.FC<Props> = ({
  settings,
  handleChange,
}: Props) => {
  const Styled = styled.div`
    fieldset {
      display: block;
      margin: 20px 0px;
    }
  `;

  return (
    <Styled>
      {settings.map((item: { var: string; value: boolean }, i: number) => (
        <ItemContainer
          handleChange={handleChange}
          key={i}
          name={item.var}
          value={item.value}
        />
      ))}
    </Styled>
  );
};
