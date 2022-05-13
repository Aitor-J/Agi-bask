import React, { useState } from "react";
import dataForest from "../data/dataforest";
import ForestCardList from "./ForestCardList";
import NavBar from "./NavBar";

const FindYourForest = () => {
  const [locations, setLocations] = useState([]);

  let cityNames = [];
  dataForest.map(
    (forest) =>
      !cityNames.includes(forest.location) && cityNames.push(forest.location)
  );

  return (
    <div className="findYourForest">
      <div className="findYourForest__bg" />
      <NavBar />
      <h1 className="findYourForest__title">AGI' BASK</h1>
      <h2 className="findYourForest__subtitle">
        Trouve ta communauté pour nettoyer la forêt.
      </h2>
      <div className="findYourForest__selector">
        <div className="findYourForest__selector__city">
          <label className="findYourForest__selector__city__title">
            ↡ Filtrer par ville ↡
          </label>

          {cityNames.map((city, index) => (
            <button
              className={
                city === locations
                  ? "findYourForest__selector__city__title__buttonOn"
                  : "findYourForest__selector__city__title__button"
              }
              key={index}
              value={city}
              onClick={(e) => setLocations(e.target.value)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      {locations.length !== 0
        ? dataForest
            .filter((forest) => forest.location == locations)
            .map((forest, index) => (
              <ForestCardList forest={forest} key={index} />
            ))
        : dataForest.map((forest, index) => (
            <ForestCardList forest={forest} key={index} />
          ))}
    </div>
  );
};

export default FindYourForest;
