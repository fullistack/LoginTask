import { Route, Redirect } from "react-router-dom";
import React from "react";
export default function PrivateRoute({ Component, ...rest }) {
  console.log(localStorage.getItem("user") ? "yes": "not")
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        localStorage.getItem("user") ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
