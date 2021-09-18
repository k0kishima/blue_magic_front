import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }: Props) => {
  const Styled = styled.div``;

  return <Styled>{children}</Styled>;
};
