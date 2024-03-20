import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/bs";
import NavBarNetflix from "./Components/NavBarNetflix";
import MainContent from "./Components/MainContent";
import TrendingNowFunction from "./Components/TrendingNowFunction";
import NewReleasesFunction from "./Components/NewReleasesFunction";
import WatchItAgainFunction from "./Components/WatchItAgainFunction";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarNetflix />
        <MainContent />

        <Routes>
          <Route path="/" element={<TrendingNowFunction />} />

          <Route path="" element={<NewReleasesFunction />} />

          <Route path="" element={<WatchItAgainFunction />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
