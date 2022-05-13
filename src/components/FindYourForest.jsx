import React, { useState } from "react";
import dataForest from "../data/dataforest";
import ForestCardList from "./ForestCardList";

const FindYourForest = () => {
  const [locations, setLocations] = useState([]);

  let cityNames = [];
  dataForest.map(
    (forest) =>
      !cityNames.includes(forest.location) && cityNames.push(forest.location)
  );

  return (
    <div className="findYourForest">
      <div className="findYourForest__bg">
        <h1 className="findYourForest__bg__title">
          Find the perfect way to clean your Forest
        </h1>
        <div className="findYourForest__bg__selector">
          <div className="findYourForest__bg__selector__city">
            <label className="findYourForest__bg__selector__city__title">
              Filter par ville
            </label>

            {cityNames.map((city, index) => (
              <button
                className={
                  city === locations
                    ? "findYourForest__bg__selector__city__buttonOn"
                    : "findYourForest__bg__selector__city__button"
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
    </div>
  );
};

export default FindYourForest;
