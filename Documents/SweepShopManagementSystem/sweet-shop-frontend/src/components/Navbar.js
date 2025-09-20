import React, { useState,useEffect,useContext } from "react";
import { getCurrentUser } from "../services/authService";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {logout} from "../services/authService";
import "../styles/Navbar.css";

export default function Navbar() 
{
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const {user,setUser} = useContext(AuthContext);
  const auth=useContext(AuthContext)
  console.log("AuthContext value in Navbar:",auth);
  const navigate=useNavigate();
const handleSignOut = () => {
    logout() // remove JWT token
    setUser(null);                     // reset user state
    navigate("/login")                    // redirect to home
  };
  return (
    <nav className="sweet-navbar">
      <div className="sweet-container">
        <Link to="/" className="sweet-logo">🍭 SweetShop</Link>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/sweets">Sweets</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li className="mobile-login">
            {!user ? (
              <>
                <Link to="/register" className="login-btn">Register</Link>
                <Link to="/login" className="login-btn">Login</Link>
              </>
            ) : (
              <span>Welcome, {user.name}</span>
            )}
          </li>
        </ul>
        <div className="desktop-login">
          {!user ? (
            <>
              <Link to="/register" className="login-btn">Register</Link>
              <Link to="/login" className="login-btn">Login</Link>
            </>
          ) : (<>
            <span>Welcome, {user.name}</span>
            <button
                 onClick={handleSignOut}
                 style={{
                          backgroundColor: "#e63946",   // red
                          color: "#fff",                // white text
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "14px",
                          transition: "background 0.3s ease"
                       }}
                     onMouseOver={(e) => (e.target.style.backgroundColor = "#d62828")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e63946")}
              >
                       Sign Out
            </button>

            </>
          )}
        </div>
      </div>
    </nav>
  );
}
