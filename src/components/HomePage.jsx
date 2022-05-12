const HomePage = () => {
  return (
    <div className="home">
      <div className="home__bg-container">
        <div className="home__bg-container__ocean">
          <img src="./src/assets/ocean.jpg" alt="ocean" />
          <button className="home__button home__button--blue">OCEAN</button>
        </div>
        <div className="home__bg-container__forest">
          <img src="./src/assets/foret.jpeg" alt="foret" />
          <button className="home__button home__button--green">FOREST</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
