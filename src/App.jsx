import "./App.scss";
import FindYourOcean from "./components/FindYourOcean";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app'>
      <div>
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
