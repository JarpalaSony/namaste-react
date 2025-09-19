import Hero from "../components/Hero";
import SweetCard from "../components/SweetCard";
import "../styles/Home.css";

export default function HomePage() {
  const sweets = [
    { name: "Chocolate Fudge", price: 5, image: "/assets/chocolate-fudge.jpg" },
    { name: "Strawberry Cupcake", price: 3, image: "/assets/strawberry-cupcake.jpg" },
    { name: "Lollipop", price: 1, image: "/assets/lollipop.jpg" },
    { name: "Macaron", price: 2, image: "/assets/macaron.jpg" },
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
