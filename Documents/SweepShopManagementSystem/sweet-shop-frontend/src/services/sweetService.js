import axios from "axios";

const API_URL = "http://localhost:5000/api/sweets";

// ✅ Get token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ➕ Add Sweet (with image upload)
export const addSweet = async (formData) => {
  const res = await axios.post(API_URL, formData, {
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "multipart/form-data", // ✅ needed for images
    },
  });
  return res.data;
};

// 📥 Get all sweets
export const getSweets = async () => {
  const res = await axios.get(API_URL, {
    headers: getAuthHeaders(),
  });
  return res.data;
};
export const getTopSweets = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/top`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
// 🔍 Search sweets
export const searchSweets = async (query) => {
  const res = await axios.get(`${API_URL}/search`, {
    params: query,
    headers: getAuthHeaders(),
  });
  return res.data;
};


export const updateSweet = async (id, sweetData) => {
  const res = await axios.put(`${API_URL}/${id}`, sweetData, {
    headers: getAuthHeaders(),
  });
  return res.data;
};

export const deleteSweet = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: getAuthHeaders(),
  });
  return res.data;
};
