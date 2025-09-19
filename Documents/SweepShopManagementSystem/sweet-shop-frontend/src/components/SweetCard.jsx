import React from "react";
import "../styles/SweetCard.css";

export default function SweetCard({ name, price, image }) {
  return (
    <div className="sweet-card">
      <img src={image} alt={name} />
      <div className="sweet-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}
