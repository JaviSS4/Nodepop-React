import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/adverts/AdvertPage/AdvertPage";
import { LoginPage } from "./components/auth";

function App() {
  return (
    <div className="app">
      {/* <AdvertsPage />
      <NewAdvertPage />
      <AdvertPage /> */}
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
