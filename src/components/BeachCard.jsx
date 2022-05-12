import React from "react";

const BeachCard = (beach) => {
  return (
    <div className="beachCard">
      <h1 className="beachCard__title">{beach.name}</h1>
      <image className="beachCard__image" src={beach.img} alt={beach.name} />
      {beach.events.dates[0] === "jj-mm-aaaa" ? (
        <h2 className="beachCard__noDate">Pas de date disponible...</h2>
      ) : (
        beach.events.dates.map((date, index) => (
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
