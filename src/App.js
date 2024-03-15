import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome";
import NavBarNetflix from "./Components/NavBarNetflix";
import MainContent from "./Components/MainContent";
import TrendingNow from "./Components/TrendingNow";

function App() {
  return (
    <div className="App">
      <NavBarNetflix />
      <MainContent />
      <TrendingNow />
    </div>
  );
}

export default App;
