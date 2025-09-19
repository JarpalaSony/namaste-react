import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import {useState,useEffect} from "react"
import heroImg from "../assets/hero_bg.jpg"; // add a candy/sweets illustration
import Quotation from "./Quotation";
export default function Hero({ title, subtitle, buttonText, buttonLink }) {
  const quotes = [
    { text: "Life is short, eat the sweets first!", author: "Anonymous" },
    { text: "Happiness is homemade… and usually baked!", author: "Sweet Lover" },
    { text: "A balanced diet is a cookie in each hand.", author: "Unknown" },
    { text: "You can’t buy happiness, but you can buy sweets.", author: "Shop Owner" },
    { text: "Desserts are the fairy tales of the kitchen.", author: "Terri Guillemets" }
  ];
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(random);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>{title} 🍬</h1>
          <p>{subtitle}</p>
          <Link to={buttonLink} className="hero-btn">
            {buttonText}
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Sweet treats" />
        </div>
      </div>
      
    </section>
     <div className="hero-quote">
         <Quotation text={currentQuote.text} author={currentQuote.author}/>
      </div>
    </>
  );
}
