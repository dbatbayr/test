import React from "react";
import "./Card.css";
const Card = ({img,text, title}) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={img}/>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>
            {text}
          </p>
        </div>
        <div className="btn">
          <button>View more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;