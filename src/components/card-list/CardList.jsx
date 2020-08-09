import React from "react";
import "./CardList.css";
import Card from "../card/Card";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.images.map((image) => (
        <Card key={image.id} image={image} />
      ))}
    </div>
  );
};

export default CardList;
