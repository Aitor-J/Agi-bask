import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const BeachCardsList = ({ beach }) => {
  return (
    <div className="beachCards">
      <h1 className="beachCards__title">{beach.name}</h1>
      <img className="beachCards__image" src={beach.img} alt={beach.name}></img>
      <h2 className="beachCards__location">{beach.location}</h2>
      <p className="beachCards__desc">{beach.desc}</p>
      <p className="beachCards__length">
        <span className="beachCards__span">Distance: </span> {beach.length}
      </p>
      <p className="beachCards__missions">Prochaines missions:</p>
      <ul className="beachCards__lu_dates">
        {beach.events.dates[0] === "jj-mm-aaaa"
          ? ""
          : beach.events.dates.map((date, index) => (
              <li className="beachCards__dates" key={index}>
                {date}
              </li>
            ))}
      </ul>
      {beach.events.dates[0] === "jj-mm-aaaa" ? (
        <NavLink to={`/Beach/${beach.id}`}>
          <button className="beachCards__buttonOn" type="button">
            CREER
          </button>
        </NavLink>
      ) : (
        <NavLink to={`/Beach/${beach.id}`}>
          <button className="beachCards__button" type="button">
            PARTICIPER
          </button>
        </NavLink>
      )}
    </div>
  );
};

BeachCardsList.propTypes = {
  beach: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeachCardsList;
