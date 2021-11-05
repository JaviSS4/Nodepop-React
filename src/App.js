import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/adverts/AdvertPage/AdvertPage";

function App() {
  return (
    <div className="app">
      <AdvertsPage />
      <NewAdvertPage />
      <AdvertPage />
    </div>
  );
}

export default App;
