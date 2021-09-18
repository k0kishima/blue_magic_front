import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Form: React.VFC = () => {
  const Styled = styled.div``;

  return (
    <Styled>
      <Button type="button" color="primary" className="form__custom-button">
        Log in
      </Button>
    </Styled>
  );
};
