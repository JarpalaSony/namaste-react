// services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // adjust as needed

// Register
export const register = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

// Login
export const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);

  // ✅ Save token + user in localStorage
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Get current user from localStorage
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
