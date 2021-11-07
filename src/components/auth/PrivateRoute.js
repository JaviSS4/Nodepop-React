import { Route, Redirect } from "react-router-dom";
import AuthContext from "./context";
import { useContext } from "react";

const PrivateRoute = (props) => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route>
      {({ location }) => (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
