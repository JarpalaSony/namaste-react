import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() 
{
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sweet-navbar">
      <div className="sweet-container">
        <Link to="/" className="sweet-logo">
          🍭 SweetShop
        </Link>
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
            <Link to="/login" className="login-btn">Login</Link>
          </li>
        </ul>
        <div className="desktop-login">
          <Link to="/login" className="login-btn">Login</Link>
        </div>

      </div>
    </nav>
  );
}
