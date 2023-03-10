import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow card-container">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div className="card-details">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
