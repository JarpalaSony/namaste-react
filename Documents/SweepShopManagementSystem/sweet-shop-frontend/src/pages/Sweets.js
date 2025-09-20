
import React, { useContext, useState, useEffect } from "react";
import SweetCard from "../components/SweetCard";
import "../styles/Sweets.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { getSweets,deleteSweet } from "../services/sweetService"; 

export default function Sweets() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const data = await getSweets();
        setSweets(data);
      } catch (err) {
        console.error("❌ Error fetching sweets:", err);
      }
    };
    fetchSweets();
  }, []);
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this sweet?")) return;

    try {
      await deleteSweet(id);
      setSweets((prev) => prev.filter((sweet) => sweet._id !== id)); 
    } catch (err) {
      console.error("❌ Error deleting sweet:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sweets-container">
      <div className="header">
        <h1 className="sweets-title">🍬 Our Delicious Sweets 🍬</h1>
        {user?.role === "admin" && (
          <Link className="add-sweet-btn" to="/add-sweet">
            ➕ Add Sweet
          </Link>
        )}
      </div>

      <div className="sweets-grid">
        {sweets.length > 0 ? (
          sweets.map((sweet) => (
            <SweetCard
              key={sweet._id}
              name={sweet.name}
              price={`₹${sweet.price} / ${sweet.quantity}g`}
              image={sweet.image || "/placeholder.png"}

              onEdit={() => navigate(`/edit-sweet/${sweet._id}`)}
              onDelete={() => handleDelete(sweet._id)}
            />
          ))
        ) : (
          <p>No sweets available yet 😢</p>
        )}
      </div>
    </div>
  );
}
