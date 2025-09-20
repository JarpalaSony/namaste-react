// src/pages/Sweets.js
import React,{useContext,useState,useEffect}from "react";
import SweetCard from "../components/SweetCard";  // ⬅️ your existing card
import "../styles/Sweets.css";
import gulab_jamoon from "../assets/gulab_jamoon.jpg";
import rasagulla from "../assets/rasagulla.jpg";
import kaju_katla from "../assets/kaju_katla.jpg";
import motichoor_laddu from "../assets/motichoor_laddu.jpg";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
const sweetsData = [
  { id: 1, name: "Gulab Jamun", price: "₹120 / 500g", image: gulab_jamoon },
  { id: 2, name: "Rasgulla", price: "₹150 / 500g", image: rasagulla},
  { id: 3, name: "Kaju Katli", price: "₹250 / 500g", image: kaju_katla },
  { id: 4, name: "Laddu", price: "₹100 / 500g", image: motichoor_laddu },
];

export default function Sweets() {
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="sweets-container">
      <div className="header">
            <h1 className="sweets-title">🍬 Our Delicious Sweets 🍬</h1>{
              user?.role==="admin" &&(<button className="add-sweet-btn">➕ Add Sweet</button>)
            }
            
      </div>
      <div className="sweets-grid">
        {sweetsData.map((sweet) => (
          <SweetCard
            key={sweet.id}
            name={sweet.name}
            price={sweet.price}
            image={sweet.image}
            onEdit={() => console.log("Edit", sweet.name)}
            onDelete={() => console.log("Delete", sweet.name)}
          />
        ))}
      </div>
    </div>
  );
}
