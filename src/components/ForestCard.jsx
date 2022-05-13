import React from "react";
import NavBar from "./NavBar";
import { useParams, NavLink } from "react-router-dom";
import dataforest from "../data/dataforest";

const ForestCard = () => {
  const { id } = useParams();

  const forest = dataforest.find((forest) => forest.id == id);
  return (
    <div className='forest'>
      <NavBar />
      <h1 className='forest__title'>{forest.name}</h1>
      <img className='forest__image' src={forest.img} alt={forest.name} />
      <p className='forest__text'>{forest.desc}</p>
      {forest.events.dates[0] === "jj-mm-aaaa" ? (
        <h2 className='forest__noDate'>Pas de date disponible...</h2>
      ) : (
        forest.events.dates.map((date, index) => (
          <NavLink to='/FormJoin'>
            <div className='forest__date' key={index}>
              {date}
            </div>
          </NavLink>
        ))
      )}
      <NavLink to='/Form'>
        <div className='forest__button'>Nouveau Projet</div>
      </NavLink>
    </div>
  );
};

export default ForestCard;
