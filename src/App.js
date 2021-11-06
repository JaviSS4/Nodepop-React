import "./App.css";
import { useState } from "react";
import AdvertsPage from "./components/adverts/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/adverts/AdvertPage/AdvertPage";
import { LoginPage } from "./components/auth";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="app">
      {/* <AdvertsPage />
      <NewAdvertPage />
      <AdvertPage /> */}
      {isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
