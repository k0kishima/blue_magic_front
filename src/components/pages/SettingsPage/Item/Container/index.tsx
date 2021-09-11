import React, { useState } from "react";
import { Item } from "../Presentation";

type Props = {
  name: string;
  value: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ItemContainer: React.FC<Props> = ({
  name,
  value,
  handleChange,
}: Props) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
    // FIXME: stateを正常に更新してrerenderしてもちゃんと反映されないから一旦同期処理で更新を反映している
    //console.log(checked);
    window.location.reload();
  };

  return (
    <Item
      handleChange={(e) => {
        handleChange(e);
        toggleChecked();
      }}
      name={name}
      value={value}
    />
  );
};
