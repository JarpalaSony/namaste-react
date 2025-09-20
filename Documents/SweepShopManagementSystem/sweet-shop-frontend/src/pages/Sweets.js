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
  const {user,loading}=useContext(AuthContext);
  const navigate=useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
  if (!loading && !user) {
    navigate("/login");
  }
}, [user, loading, navigate]);
if (loading) {
  return <div>Loading...</div>; // Or spinner
}
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/sweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // If you use JWT auth, include it:
          // "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add sweet");
      }

      const data = await response.json();
      console.log("✅ Sweet added:", data);

      // reset form
      setFormData({ name: "", category: "", price: "", quantity: "" });
      setShowForm(false);
    } catch (err) {
      console.error("❌ Error adding sweet:", err);
    }
  };

  return (
    <div className="sweets-container">
      <div className="header">
            <h1 className="sweets-title">🍬 Our Delicious Sweets 🍬</h1>{
              user?.role==="admin" &&(<button className="add-sweet-btn" onClick={() => setShowForm(!showForm)}>➕ Add Sweet</button>)
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
      {showForm && (
        <form className="add-sweet-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Sweet Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <button type="submit">✅ Save Sweet</button>
        </form>
      )}
    </div>
  );
}
