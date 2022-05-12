import React, { useState } from "react";
import PropTypes from "prop-types";
import dataBeach from "../data/dataBeach";
import BeachCard from "./BeachCard";

const FindYourOcean = () => {
  const [location, setLocation] = useState("");

  let cityNames = [];
  dataBeach.map(
    (beach) =>
      !cityNames.includes(beach.location) && cityNames.push(beach.location)
  );

  return (
    <div className="findYourOcean">
      <h1 className="findYourOcean__title">
        Find the perfect way to clean your ocean
      </h1>
      <select
        className="findYourOcean__select"
        onChange={(e) => setLocation(e.target.value)}
      >
        {cityNames.map((beach, index) => (
          <option key={index} value={beach}>
            {beach}
          </option>
        ))}
      </select>
      {dataBeach
        .filter((beach) => beach.location == location)
        .map((beach) => (
          <BeachCard beach={beach} />
        ))}
    </div>
  );
};

FindYourOcean.propTypes = {
  beaches: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default FindYourOcean;
