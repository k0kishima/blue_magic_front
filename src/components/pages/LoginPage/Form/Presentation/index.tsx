import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

type Props = {
  handleSubmit: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const Form: React.VFC<Props> = ({ handleSubmit }: Props) => {
  const Styled = styled.div``;

  return (
    <Styled>
      <Button type="button" color="primary" onClick={handleSubmit}>
        Log in
      </Button>
    </Styled>
  );
};
