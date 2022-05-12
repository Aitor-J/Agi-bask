import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FindYourOcean from "./components/FindYourOcean";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import FindYourForest from "./components/FindYourForest";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Ocean" element={<FindYourOcean />} />
          <Route path="/Forest" element={<FindYourForest />} />
        </Routes>
      </HashRouter>{" "}
    </div>
  );
}

export default App;
