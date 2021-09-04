/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoutes({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{ pathname: ROUTES.LOGIN, state: { from: location } }}
            />
          );
        }

        return null;
      }}
    />
  );
}

ProtectedRoutes.propTypes = {
  // eslint-disable-next-line react/require-default-props
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
