import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons/bs";
import NavBarNetflix from "./Components/NavBarNetflix";
import MainContent from "./Components/MainContent";
import TrendingNow from "./Components/TrendingNow";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBarNetflix />
      <MainContent />
      <TrendingNow />
      <Footer />
    </div>
  );
}

export default App;
