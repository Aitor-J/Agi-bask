import React, { useState } from "react";
import dataBeach from "../data/dataBeach";
import BeachCard from "./BeachCardList";

const FindYourOcean = () => {
  const [location, setLocation] = useState("");

  let cityNames = [];
  dataBeach.map(
    (beach) =>
      !cityNames.includes(beach.location) && cityNames.push(beach.location)
  );

  return (
    <div className='findYourOcean'>
      {/* <img src='./src/assets/ocean.jpg' alt='ocean' /> */}
      <h1 className='findYourOcean__title'>
        Find the perfect way to clean your ocean
      </h1>
      <div className='findYourOcean__selector'>
        <div className='findYourOcean__selector__city'>
          <label className='findYourOcean__selector__city__title'>
            Filter par ville
          </label>

          {cityNames.map((city, index) => (
            <div className='findYourOcean__selector__city__button' key={index}>
              <p>{city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindYourOcean;
