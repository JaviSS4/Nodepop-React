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
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/adverts/new" component={NewAdvertPage}></Route>
            <Route path="/adverts/:id" component={AdvertPage}></Route>
            <Route path="/adverts" component={AdvertsPage}></Route>
            <Route exact path="/">
              <Redirect to="/adverts" />
            </Route>
            <Route path="/404">
              <div>404 Not found</div>
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
          {/* <AdvertsPage />
      <NewAdvertPage />
      <AdvertPage /> */}
          {/* {isLogged ? <AdvertsPage /> : <LoginPage />} */}
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
