import React from "react";
import { useParams, NavLink } from "react-router-dom";
import databeach from "../data/dataBeach";
import NavBar from "./NavBar";

const BeachCard = () => {
  const { id } = useParams();
  const beach = databeach.find((beach) => beach.id == id);

  return (
    <div className="beachCard">
      <NavBar />
      <h1 className="beachCard__title">{beach.name}</h1>
      <img className="beachCard__image" src={beach.img} alt={beach.name} />
      <p className="beachCard__text">{beach.desc}</p>
      {beach.events.dates[0] == "jj-mm-aaaa" ? (
        <h2 className="beachCard__noDate">Pas de date disponible...</h2>
      ) : (
        beach.events.dates.map((date, index) => (
          <div className="beachCard__date" key={index}>
            {date}
          </div>
        ))
      )}
      <NavLink to="/Form">
        <div className="beachCard__button">Nouveau Projet</div>
      </NavLink>
    </div>
  );
};

export default BeachCard;
