import React from "react";
import "./Card.css";

const Card = ({ image }) => {
  return (
    <div className="card-container">
      <img
        style={{ width: "100%", height: "250px" }}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
};
// `https://robohash.org/${props.monster.id}?set=set2&size=180x180` monsters url
export default Card;
