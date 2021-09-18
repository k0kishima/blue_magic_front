import React from "react";
import { Form } from "components/pages/LoginPage/Form";
import styled from "styled-components";

export const FormWrapper: React.VFC = () => {
  const Styled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Styled>
      <Form />
    </Styled>
  );
};
