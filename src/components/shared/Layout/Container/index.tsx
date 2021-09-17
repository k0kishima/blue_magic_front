import React from "react";
import { Layout } from "components/templates/Layout";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const LayoutContainer: React.FC<Props> = ({
  children,
  title,
}: Props) => {
  return <Layout title={title}>{children}</Layout>;
};
