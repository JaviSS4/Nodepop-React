import { Route, Redirect } from "react-router-dom";
import AuthContext from "./context";
import { useContext } from "react";

const PrivateRoute = (...props) => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? <Route {...props} /> : <Redirect to="/login"></Redirect>;
};

export default PrivateRoute;
