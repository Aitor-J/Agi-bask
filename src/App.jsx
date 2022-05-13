import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FindYourOcean from "./components/FindYourOcean";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import FindYourForest from "./components/FindYourForest";
import BeachCard from "./components/BeachCard";
import databeach from "./data/databeach";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<BeachCard beach={databeach[0]} />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Ocean" element={<FindYourOcean />} />
          <Route path="/Forest" element={<FindYourForest />} />
        </Routes>
      </HashRouter>{" "}
    </div>
  );
}

export default App;
