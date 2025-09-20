
import React, { useState, useEffect, useRef, useContext } from "react";
import { MoreVertical, Edit3, Trash2, ShoppingCart } from "lucide-react";
import { AuthContext } from "../context/AuthContext"; // ✅ import context
import "../styles/SweetCard.css";

export default function SweetCard({ name, price, image, onEdit, onDelete }) {
  const { user } = useContext(AuthContext); // ✅ get user from context
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="sweet-card">
      <div className="sweet-img">
        <img src={image} alt={name} />
      </div>

      <div className="sweet-content">
        <h3>{name}</h3>
        <p className="price">{price}</p>

        <div className="card-actions">
          <button
            className="buy-btn"
            onClick={() => console.log("Purchase", name)}
          >
            <ShoppingCart size={18} />
            Purchase
          </button>

          {/* ✅ Show 3 dots menu only if user is admin */}
          {user?.role === "admin" && (
            <div className="menu" ref={menuRef}>
              <button
                className="menu-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen((prev) => !prev);
                }}
              >
                <MoreVertical size={20} />
              </button>

              {menuOpen && (
                <div className="menu-list">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onEdit && onEdit();
                    }}
                  >
                    <Edit3 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onDelete && onDelete();
                    }}
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
