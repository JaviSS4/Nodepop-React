import "./App.css";
import { useState } from "react";
import AdvertsPage from "./components/adverts/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/adverts/AdvertPage/AdvertPage";
import { LoginPage } from "./components/auth";
import { logout } from "./components/auth/LoginPage/service";
import { AuthContextProvider } from "./components/auth/context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    logout().then(setIsLogged(false));
  };

  return (
    <Router>
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <div className="app">
          <Switch>
            <Route path="/login">
              {(routeProps) => <LoginPage {...routeProps} />}
            </Route>
            <PrivateRoute
              path="/adverts/new"
              component={NewAdvertPage}
            ></PrivateRoute>
            <PrivateRoute
              path="/adverts/:id"
              component={AdvertPage}
            ></PrivateRoute>
            <PrivateRoute
              path="/adverts"
              component={AdvertsPage}
            ></PrivateRoute>
            <PrivateRoute exact path="/">
              <Redirect to="/adverts" />
            </PrivateRoute>
            <PrivateRoute path="/404">
              <div>404 Not found</div>
            </PrivateRoute>
            <PrivateRoute>
              <Redirect to="/404" />
            </PrivateRoute>
          </Switch>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
