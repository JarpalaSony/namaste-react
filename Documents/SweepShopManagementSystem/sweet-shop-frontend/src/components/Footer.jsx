import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaCandyCane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="sweet-footer">
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-col">
          <h2 className="footer-logo">
            🍭 SweetShop
          </h2>
          <p>
            Delicious sweets crafted with love. We bring happiness
            in every bite. Taste the magic of sweetness today!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sweets">Our Sweets</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/customers">Customers</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-col">
          <h3>Customer Support</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaCandyCane /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SweetShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
