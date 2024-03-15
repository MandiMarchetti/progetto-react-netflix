import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/bs";
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
