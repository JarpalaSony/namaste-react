import React, { useState,useContext } from "react";
import { login } from "../services/authService";
import "../styles/Register.css"; // import css
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
export default function Login() {
 const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
   const {setUser} = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      setUser(data.user);
      setMessage(`✅ User login Successful! Welcome ${data.user.name}`);
      navigate("/")
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.message || "Login failed"));
    }
  };

  return (
    <div className="register-container">
     
      <div className="register-card">
        <h2>Login,Welcome</h2>
      <button className="close-btn" onClick={() => navigate("/")}>
        &times;
      </button>
        <form onSubmit={handleSubmit}>
         

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="login-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}
