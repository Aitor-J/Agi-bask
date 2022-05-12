import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FindYourOcean from "./components/FindYourOcean";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
<<<<<<< HEAD
import Form from "./components/Form";
=======
import FindYourForest from "./components/FindYourForest";
>>>>>>> d4903070510a1bb4c1f0b3b9e1f62441e5be0c83

function App() {
  return (
    <div className="app">
<<<<<<< HEAD
      <div>
        <Form />
      </div>
=======
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Ocean" element={<FindYourOcean />} />
          <Route path="/Forest" element={<FindYourForest />} />
        </Routes>
      </HashRouter>{" "}
>>>>>>> d4903070510a1bb4c1f0b3b9e1f62441e5be0c83
    </div>
  );
}

export default App;
