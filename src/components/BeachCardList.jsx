import React from "react";
import PropTypes from "prop-types";

const BeachCardList = ({ beach }) => {
  return (
    <div className="beachCard">
      <h1 className="beachCard__title">{beach.name}</h1>
      <img className="beachCard__image" src={beach.img} alt={beach.name}></img>
      <h2 className="beachCard__location">{beach.location}</h2>
      <p className="beachCard__desc">{beach.desc}</p>
      <p className="beachCard__length">{beach.length}</p>
    </div>
  );
};

BeachCard.propTypes = {
  beach: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeachCardList;
