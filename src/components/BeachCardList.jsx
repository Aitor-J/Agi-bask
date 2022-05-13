import React from "react";
import PropTypes from "prop-types";

const BeachCardList = ({ beach }) => {
  return (
    <div className="beachCard">
      <h1 className="beachCard__title">{beach.name}</h1>
      <img className="beachCard__image" src={beach.img} alt={beach.name}></img>
      <h2 className="beachCard__location">{beach.location}</h2>
      <p className="beachCard__desc">{beach.desc}</p>
      <p className="beachCard__length">
        <span className="beachCard__span">Distance: </span> {beach.length}
      </p>
      <p className="beachCard__missions">Prochaines missions</p>
      <ul className="beachCard__lu_dates">
        {beach.events.dates[0] === "jj-mm-aaaa"
          ? ""
          : beach.events.dates.map((date, index) => (
              <li className="beachCard__dates" key={index}>
                {date}
              </li>
            ))}
      </ul>
      {beach.events.dates[0] === "jj-mm-aaaa" ? (
        <button className="beachCard__buttonOn" type="button">
          CREER
        </button>
      ) : (
        <button className="beachCard__button" type="button">
          PARTICIPER
        </button>
      )}
    </div>
  );
};

BeachCardList.propTypes = {
  beach: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeachCardList;
