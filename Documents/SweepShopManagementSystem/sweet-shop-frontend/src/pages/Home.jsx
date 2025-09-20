
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SweetCard from "../components/SweetCard";
import Footer from "../components/Footer";
import { getTopSweets,deleteSweet } from "../services/sweetService";
import {useNavigate} from "react-router-dom";
import "../styles/Home.css";

export default function HomePage() {
  const [sweets, setSweets] = useState([]);
 const navigate=useNavigate();
  useEffect(() => {
    const fetchTopSweets = async () => {
      try {
        const data = await getTopSweets();
        setSweets(data);
      } catch (err) {
        console.error("❌ Error fetching top sweets:", err);
      }
    };

    fetchTopSweets();
  }, []);
  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this sweet?")) return;
  try {
    await deleteSweet(id);
    setSweets((prev) => prev.filter((s) => s._id !== id));
  } catch (err) {
    console.error("❌ Error deleting sweet:", err);
  }
};

  return (
    <div className="homepage">
      {/* Hero Section */}
      <Hero
        title="Welcome to SweetShop"
        subtitle="Delicious treats crafted with love for every sweet tooth!"
        buttonText="Explore Sweets"
        buttonLink="/sweets"
      />

      {/* Best Sweets Section */}
      <section className="sweets-section">
        <h2 className="sweets-title">🍭 Our Best Sweets 🍪</h2>
        <div className="sweets-grid">
          {sweets.length > 0 ? (
            sweets.map((sweet) => (
              <SweetCard
                key={sweet._id}
                name={sweet.name}
                price={sweet.price}
                // ✅ build image path from backend uploads folder
                image={
                  sweet.image
                    ? `http://localhost:5000/uploads/${sweet.image}`
                    : "/placeholder.png"
                }
                onEdit={() => navigate(`/edit-sweet/${sweet._id}`)}
                onDelete={() => handleDelete(sweet._id)}
              />
            ))
          ) : (
            <p className="no-sweets">No sweets available yet 😢</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
