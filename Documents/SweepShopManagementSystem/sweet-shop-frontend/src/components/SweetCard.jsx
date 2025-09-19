import React from "react";
import "../styles/SweetCard.css";

export default function SweetCard({ name, price, image }) {
  return (
    <div className="sweet-card">
      <div className="sweet-img-wrapper">
        <img src={image} alt={name} />
        <span className="sweet-price">${price}</span>
      </div>
      <div className="sweet-info">
        <h3>{name}</h3>
        <button className="sweet-btn buy">🛒 Purchase Now</button>
      </div>
    </div>
  );
}
