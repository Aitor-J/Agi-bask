import React from "react";

const BeachCard = (beach) => {
  console.log(beach);
  return (
    <div className="beachCard">
      <h1 className="beachCard__title">{beach.beach.name}</h1>
      <img
        className="beachCard__image"
        src={beach.beach.img}
        alt={beach.beach.name}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, suscipit
        impedit ab dolorem cumque labore modi obcaecati quam odio et vero
        aliquid! Neque exercitationem consequuntur ab atque molestiae modi nisi.
      </p>
      {beach.beach.events.dates[0] === "jj-mm-aaaa" ? (
        <h2 className="beachCard__noDate">Pas de date disponible...</h2>
      ) : (
        beach.beach.events.dates.map((date, index) => (
          <div className="beachCard__date" key={index}>
            {date}
          </div>
        ))
      )}
      <div className="beachCard__button">NEW PROJECT</div>
    </div>
  );
};

export default BeachCard;
