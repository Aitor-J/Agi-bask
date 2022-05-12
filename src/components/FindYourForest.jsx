import React, { useState } from "react";
import dataForest from "../data/dataforest";
import ForestCardList from "./ForestCardList";

const FindYourForest = () => {
  const [location, setLocation] = useState("");

  let cityNames = [];
  dataForest.map((forest) => !cityNames.includes(forest.location) && cityNames.push(forest.location));

  return (
    <div className='findYourForest'>
      <h1 className='findYourForest__title'>Find the perfect way to clean your Forest</h1>
      <div className='findYourForest__selector'>
        <div className='findYourForest__selector__city'>
          <label>By city:</label>
          <select className='findYourForest__selector__city__select' onChange={(e) => setLocation(e.target.value)}>
            {cityNames.map((forest, index) => (
              <option key={index} value={forest}>
                {forest}
              </option>
            ))}
          </select>
        </div>
        <div className='findYourForest__selector__date'>
          <label>By date:</label>
          <select className='findYourForest__selector__date__select' onChange={(e) => setLocation(e.target.value)}>
            {cityNames.map((forest, index) => (
              <option key={index} value={forest}>
                {forest}
              </option>
            ))}
          </select>
          {dataForest
            .filter((forest) => forest.location == location)
            .map((forest, index) => (
              <ForestCardList forest={forest} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FindYourForest;
