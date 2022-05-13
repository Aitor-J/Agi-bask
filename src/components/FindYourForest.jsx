import React, { useState } from "react";
import dataForest from "../data/dataforest";
import NavBar from "./NavBar";

import BeachCard from "./BeachCardList";
import ForestCardList from "./ForestCardList";

const FindYourForest = () => {
  const [location, setLocation] = useState("");

  let cityNames = [];
  dataForest.map(
    (forest) =>
      !cityNames.includes(forest.location) && cityNames.push(forest.location)
  );

  return (
    <div className="findYourForest">
      <div className="findYourForest__bg">
        <NavBar />
        <h1 className="findYourForest__bg__title">
          Find the perfect way to clean your Forest
        </h1>
        <div className="findYourForest__bg__selector">
          <div className="findYourForest__bg__selector__city">
            <label className="findYourForest__bg__selector__city__title">
              Filter par ville
            </label>

            {cityNames.map((city, index) => (
              <div
                className="findYourForest__bg__selector__city__button"
                key={index}
                value={city}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourForest;
