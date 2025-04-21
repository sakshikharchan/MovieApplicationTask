
import React from "react";
import "../CSS/Card.css"; 

const Card = ({ imageSrc, title, rating, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card-image-wrapper">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        {rating !== undefined && <p>Rating: {rating}</p>}
      </div>
    </div>
  );
};

export default Card;
