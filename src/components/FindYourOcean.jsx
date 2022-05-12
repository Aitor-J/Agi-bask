import React, { useState } from "react";
import dataBeach from "../data/dataBeach";
import BeachCardList from "./BeachCardList";

const FindYourOcean = () => {
  const [location, setLocation] = useState("");

  let cityNames = [];
  dataBeach.map((beach) => !cityNames.includes(beach.location) && cityNames.push(beach.location));

  return (
    <div className='findYourOcean'>
      <h1 className='findYourOcean__title'>Find the perfect way to clean your ocean</h1>
      <div className='findYourOcean__selector'>
        <div className='findYourOcean__selector__city'>
          <label>By city:</label>
          <select className='findYourOcean__selector__city__select' onChange={(e) => setLocation(e.target.value)}>
            {cityNames.map((beach, index) => (
              <option key={index} value={beach}>
                {beach}
              </option>
            ))}
          </select>
        </div>
        <div className='findYourOcean__selector__date'>
          <label>By date:</label>
          <select className='findYourOcean__selector__date__select' onChange={(e) => setLocation(e.target.value)}>
            {cityNames.map((beach, index) => (
              <option key={index} value={beach}>
                {beach}
              </option>
            ))}
          </select>
          {dataBeach
            .filter((beach) => beach.location == location)
            .map((beach, index) => (
              <BeachCardList beach={beach} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FindYourOcean;
