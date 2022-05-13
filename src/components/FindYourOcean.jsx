import React, { useState } from "react";
<<<<<<< HEAD
import Calendar from "react-calendar";
import dataBeach from "../data/dataBeach";
=======
import dataBeach from "../data/databeach";
>>>>>>> 4a9956017a46b5906905bc4c70481203897a0df0
import BeachCardList from "./BeachCardsList";
import NavBar from "./NavBar";

const FindYourOcean = () => {
  const [locations, setLocations] = useState([]);
  let [firstDate, setFirstDate] = useState([]);
  let [lastDate, setLastDate] = useState([]);
  console.log(firstDate);

  let cityNames = [];
  dataBeach.map(
    (beach) =>
      !cityNames.includes(beach.location) && cityNames.push(beach.location)
  );

  return (
    <div className="findYourOcean">
      <div className="findYourOcean__bg" />
<<<<<<< HEAD
      <NavBar />
=======
>>>>>>> 4a9956017a46b5906905bc4c70481203897a0df0
      <h1 className="findYourOcean__title">
        Find the perfect way to clean your ocean
      </h1>
      <div className="findYourOcean__selector">
        <div className="findYourOcean__selector__city">
          <label className="findYourOcean__selector__city__title">
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
              onClick={(e) => setLocations(e.target.value)}
            >
              {city}
            </button>
          ))}
        </div>
        <div className="findYourOcean__selector__date">
          <Calendar sessions={firstDate} setSessions={setFirstDate} />
        </div>
      </div>
      {locations.length !== 0
        ? dataBeach
            .filter((beach) => beach.location == locations)
            .map((beach, index) => <BeachCardList beach={beach} key={index} />)
        : dataBeach.map((beach, index) => (
            <BeachCardList beach={beach} key={index} />
          ))}
    </div>
  );
};

export default FindYourOcean;
