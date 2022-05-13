import React, { useState } from "react";
import dataBeach from "../data/dataBeach";
import BeachCardList from "./BeachCardList";

const FindYourOcean = () => {
  const [locations, setLocations] = useState([]);

  let cityNames = [];
  dataBeach.map(
    (beach) =>
      !cityNames.includes(beach.location) && cityNames.push(beach.location)
  );
  console.log(cityNames);
  return (
    <div className='findYourOcean'>
      <div className='findYourOcean__bg' />
      <h1 className='findYourOcean__title'>
        Find the perfect way to clean your ocean
      </h1>
      <div className='findYourOcean__selector'>
        <div className='findYourOcean__selector__city'>
          <label className='findYourOcean__selector__city__title'>
            Filter par ville
          </label>

          {cityNames.map((city, index) => (
            <button
              className={
                city === locations
                  ? "findYourOcean__selector__city__buttonOn"
                  : "findYourOcean__selector__city__button"
              }
              key={index}
              value={city}
              onClick={(e) => setLocations(e.target.value)}>
              {city}
            </button>
          ))}
        </div>
      </div>
      {dataBeach
        .filter((beach) => beach.location == locations)
        .map((beach, index) => (
          <BeachCardList beach={beach} key={index} />
        ))}
    </div>
  );
};

export default FindYourOcean;
