import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__bg-container">
        <div className="home__bg-container__ocean">
          <img src="./src/assets/ocean.jpg" alt="ocean" />
          <NavLink to="/Ocean">
            <button className="home__button home__button--blue">OCEAN</button>
          </NavLink>
        </div>
        <div className="home__bg-container__forest">
          <img src="./src/assets/foret.jpeg" alt="foret" />
          <NavLink to="/Forest">
            <button className="home__button home__button--green">FORET</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
