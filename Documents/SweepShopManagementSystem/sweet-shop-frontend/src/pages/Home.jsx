import Hero from "../components/Hero";
import SweetCard from "../components/SweetCard";
import "../styles/Home.css";
import cool_icecream from "../assets/cool_icecream.jpg";
import lollipop from "../assets/macarons.jpg";
import straberry_cupcake from "../assets/straberry_cupcake.png";
import macarons from "../assets/macarons.jpg";
export default function HomePage() {
  const sweets = [
    { name: "Chocolate Fudge", price: 5, image: cool_icecream },
    { name: "Strawberry Cupcake", price: 3, image: straberry_cupcake },
    { name: "Lollipop", price: 1, image: lollipop },
    { name: "Macaron", price: 2, image: macarons },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <Hero
        title="Welcome to SweetShop"
        subtitle="Delicious treats crafted with love for every sweet tooth!"
        buttonText="Explore Sweets"
        buttonLink="/sweets"
      />

      {/* Quotation Section */}
      

      {/* Best Sweets Section */}
      <section className="sweets-section">
        <h2 className="sweets-title">🍭 Our Best Sweets 🍪</h2>
        <div className="sweets-grid">
          {sweets.map((sweet, index) => (
            <SweetCard key={index} {...sweet} />
          ))}
        </div>
      </section>
    </div>
  );
}
