import "./App.scss";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import FindYourOcean from "./components/FindYourOcean";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import FindYourForest from "./components/FindYourForest";
import BeachCard from "./components/BeachCard";
import databeach from "./data/databeach";
import ForestCard from "./components/ForestCard";
import dataforest from "./data/dataforest";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Beach" element={<BeachCard beach={databeach[0]} />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Ocean" element={<FindYourOcean />} />
          <Route path="/Forest" element={<FindYourForest />} />
        </Routes>
      </HashRouter>{" "}
    </div>
  );
}

export default App;
