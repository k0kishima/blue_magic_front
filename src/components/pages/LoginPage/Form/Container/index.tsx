import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "hooks/useActions";
import { authStore } from "store/auth";
import { Form } from "../Presentation";
import { RootState } from "store/store";
import { Redirect } from "react-router-dom";

const selector = ({ auth }: RootState) => ({
  isLoggedIn: auth.isLoggedIn,
});

const actionsMap = {
  login: authStore.actions.login,
};

export const FormContainer: React.VFC = () => {
  const { login } = useActions(actionsMap);
  const { isLoggedIn } = useSelector(selector);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    login();
  };

  return <Form handleSubmit={handleSubmit} />;
};
