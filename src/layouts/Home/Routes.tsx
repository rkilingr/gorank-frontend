import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";
import HomeView from "../../views/Home/Home";
import { PrivateRoute } from "../../auth/PrivateRoute";

const SwitchRoutes: React.FC = () => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout + prop.path === "/") {
          return <HomeView key={key} />;
        }

        if (prop.isAuthed === true) {
          return (
            <PrivateRoute
              key={key}
              path={prop.layout + prop.path}
              component={prop.component}
            />
          );
        }
        return (
          <Route
            key={key}
            path={prop.layout + prop.path}
            component={prop.component}
          />
        );
      })}
    </Switch>
  );
};

export default SwitchRoutes;
