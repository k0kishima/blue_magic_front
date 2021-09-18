import React from "react";
import { useActions } from "hooks/useActions";
import { authStore } from "store/auth";
import { Form } from "../Presentation";

const actionsMap = {
  login: authStore.actions.login,
};

export const FormContainer: React.VFC = () => {
  const { login } = useActions(actionsMap);

  const handleSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    login();
  };

  return <Form handleSubmit={handleSubmit} />;
};
