import "./App.css";
import { useState } from "react";
import AdvertsPage from "./components/adverts/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/adverts/AdvertPage/AdvertPage";
import { LoginPage } from "./components/auth";
import { logout } from "./components/auth/LoginPage/service";
import { AuthContextProvider } from "./components/auth/context";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    logout().then(setIsLogged(false));
  };

  return (
    <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
      <div className="app">
        {/* <AdvertsPage />
      <NewAdvertPage />
      <AdvertPage /> */}
        {isLogged ? <AdvertsPage /> : <LoginPage />}
      </div>
    </AuthContextProvider>
  );
}

export default App;
