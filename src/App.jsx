import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import ProtectedRoutes from "./helpers/protected-route";
import useAuthListener from "./hooks/use-auth-listener";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/not-found"));
const Profile = lazy(() => import("./pages/profile"));

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} exact />
            <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoutes user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoutes>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
