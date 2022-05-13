import React from "react";
import PropTypes from "prop-types";

const forestCardList = ({ forest }) => {
  return (
    <div className="forestCard">
      <h1 className="forestCard__title">{forest.name}</h1>
      <img
        className="forestCard__image"
        src={forest.img}
        alt={forest.name}
      ></img>
      <h2 className="forestCard__location">{forest.location}</h2>
      <p className="forestCard__desc">{forest.desc}</p>
      <p className="forestCard__missions">Prochaines missions</p>
      <ul className="forestCard__lu_dates">
        {forest.events.dates[0] === "jj-mm-aaaa" ? (
          <p className="forestCard__noDates">Pas de dates disponibles...</p>
        ) : (
          forest.events.dates.map((date, index) => (
            <li className="forestCard__dates" key={index}>
              {date}
            </li>
          ))
        )}
      </ul>
      <button className="forestCard__button" type="button">
        PARTICIPER
      </button>
    </div>
  );
};

forestCardList.propTypes = {
  forest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default forestCardList;
