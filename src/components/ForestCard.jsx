import React from "react";

const ForestCard = (forest) => {
  console.log(forest);
  return (
    <div className="forest">
      <h1 className="forest__title">{forest.forest.name}</h1>
      <img
        className="forest__image"
        src={forest.forest.img}
        alt={forest.forest.name}
      />
      <p className="forest__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, suscipit
        impedit ab dolorem cumque labore modi obcaecati quam odio et vero
        aliquid! Neque exercitationem consequuntur ab atque molestiae modi nisi.
      </p>
      {forest.forest.events.dates[0] === "jj-mm-aaaa" ? (
        <h2 className="forest__noDate">Pas de date disponible...</h2>
      ) : (
        forest.forest.events.dates.map((date, index) => (
          <div className="forest__date" key={index}>
            {date}
          </div>
        ))
      )}
      <div className="forest__button">Nouveau Projet</div>
    </div>
  );
};

export default ForestCard;
