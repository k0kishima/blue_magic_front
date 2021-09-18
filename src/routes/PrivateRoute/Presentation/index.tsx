import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps, useHistory } from "react-router-dom";
import { RootState } from "store/store";

type Props = RouteProps;

const selector = ({ auth }: RootState) => ({
  isLoggedIn: auth.isLoggedIn,
});

export const PrivateRoute: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  component: Component = () => <></>,
  ...restProps
}) => {
  const { isLoggedIn } = useSelector(selector);
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      return history.replace("login");
    }
  }, [isLoggedIn]);

  return <Route {...restProps} render={(props) => <Component {...props} />} />;
};
