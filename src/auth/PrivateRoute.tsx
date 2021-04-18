import React from "react";
import { Route, Redirect, RouteProps } from "react-router";
import useAuth from "./useAuth";

type PrivateRouteProps = RouteProps;

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const auth = useAuth();
  if (auth?.loginInfo.isLoggedIn === false) return <Redirect to="/login" />;
  return <Route {...rest} />;
};
