// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css"
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-yellow-50 min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-pink-700 drop-shadow-md"
      >
        🍬 Welcome to <span className="text-yellow-500">SweetShop</span> 🍭
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg text-gray-600 max-w-xl"
      >
        Your one-stop shop for delicious sweets, candies, and happiness!  
        Browse our treats and order your favorites in just a few clicks.  
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex gap-6"
      >
        <Link
          to="/sweets"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transform transition"
        >
          🍭 Explore Sweets
        </Link>

        <Link
          to="/login"
          className="px-6 py-3 rounded-full bg-white text-pink-600 border-2 border-pink-400 font-bold shadow-lg hover:bg-pink-50 hover:scale-105 transform transition"
        >
          🔑 Login / Register
        </Link>
      </motion.div>

      {/* Decorative candy emojis */}
      <div className="mt-12 text-3xl flex gap-4">
        <span>🍩</span>
        <span>🍫</span>
        <span>🍪</span>
        <span>🍦</span>
        <span>🍰</span>
      </div>
    </div>
  );
}
