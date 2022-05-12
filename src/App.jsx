import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import FindYourOcean from "./components/FindYourOcean";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <div>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Ocean" element={<FindYourOcean />} />
          </Routes>
        </HashRouter>{" "}
      </div>
    </div>
  );
}

export default App;
